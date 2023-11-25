const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const cors = require("cors");

router.get("/", async (req, res) => {
    const apiKey = req.query.apiKey;

    if (req.query.apiKey !== process.env.MOCK_API_KEY) {
        return res.status(401).send("Unauthorized");
    }

    try {
        // Fetch all inventories
        const allInventories = await knex("inventories");
        if (!allInventories.length) {
            return res.status(404).json({ message: `No inventories found` });
        }

        // Array to store the inventory items with images
        let inventoriesWithImages = [];

        // Loop through each inventory item and fetch its images
        for (const item of allInventories) {
            const images = await knex("images").where({ item_id: item.id }).select("url");

            const imageUrls = images.map((img) => img.url);

            // Combine inventory details with image URLs
            inventoriesWithImages.push({ ...item, images: imageUrls });
        }

        return res.status(200).json(inventoriesWithImages);
    } catch (error) {
        console.error("Error fetching inventories with images: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/:id", async (req, res) => {
    const apiKey = req.query.apiKey;
    const itemId = req.params.id;
    const itemToUpdate = await knex("inventories").where({ id: itemId });

    if (req.query.apiKey !== process.env.MOCK_API_KEY) {
        return res.status(401).send("Unauthorized");
    }

    if (!itemToUpdate.length) {
        return res.status(404).json({ message: `No item was found with the id ${itemId}` });
    }

    // Retrieve the item details along with the store details
    const inventoryJoin = await knex("stores")
        .join("inventories", "inventories.store_id", "stores.id")
        .where({ "inventories.id": itemId })
        .select("item_name", "colour", "category", "status", "quantity", "store_id", "store_name");

    if (!inventoryJoin) {
        return res.status(404).json({ message: `No item details found for id ${itemId}` });
    }

    // Retrieve the image URLs associated with this item
    const imageUrls = await knex("images").where({ item_id: itemId }).select("url");

    // Combine the inventory details with image URLs
    const imagePull = { ...inventoryJoin, images: imageUrls.map((img) => img.url) };

    return res.status(200).json(imagePull);
});

router.put("/:id", async (req, res) => {
    const itemToUpdate = await knex("inventories").where({ id: req.params.id });
    const apiKey = req.query.apiKey;

    if (req.query.apiKey !== process.env.MOCK_API_KEY) {
        return res.status(401).send("Unauthorized");
    }

    if (!itemToUpdate.length) {
        return res.status(404).json({ message: `No item was found with the id ${req.params.id}` });
    }

    const { quantity } = req.body;

    await knex("inventories")
        .where({
            id: req.params.id,
        })
        .update({
            quantity: parseInt(quantity),
        });

    const updatedItem = await knex("inventories").where({ id: req.params.id });
    res.status(200).json(updatedItem[0]);
});

module.exports = router;
