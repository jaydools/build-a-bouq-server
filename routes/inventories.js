const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (req, res) => {
    const allInventories = await knex("inventories");
    if (!allInventories.length) {
        return res.status(404).json({ message: `No inventories found` });
    }
    return res.status(200).json(allInventories);
});

router.get("/:id", async (req, res) => {
    const itemId = req.params.id;
    const itemToUpdate = await knex("inventories").where({ id: itemId });

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
