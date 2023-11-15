const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/:id", async (req, res) => {
    const itemToUpdate = await knex("inventories").where({ id: req.params.id });
    if (!itemToUpdate.length) {
        return res.status(404).json({ message: `No item was found with the id ${req.params.id}` });
    }

    const inventoryJoin = await knex("stores")
        .join("inventories", "inventories.store_id", "stores.id")
        .where({ "inventories.id": req.params.id })
        .select("item_name", "colour", "category", "status", "quantity", "store_id", "store_name");

    return res.status(200).json(inventoryJoin[0]);
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
