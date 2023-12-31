/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("inventories").del();
    await knex("inventories").insert([
        {
            id: 1,
            store_id: 1,
            item_name: "Lillies",
            colour: "white",
            category: "primary",
            status: "In Stock",
            quantity: 53,
            price: 20,
        },
        {
            id: 2,
            store_id: 1,
            item_name: "Roses - Red",
            colour: "red",
            category: "primary",
            status: "Out of Stock",
            quantity: 3,
            price: 25,
        },
        {
            id: 3,
            store_id: 1,
            item_name: "Roses - White",
            colour: "white",
            category: "primary",
            status: "In Stock",
            quantity: 10,
            price: 25,
        },
        {
            id: 4,
            store_id: 1,
            item_name: "Carnations",
            colour: "pink",
            category: "primary",
            status: "In Stock",
            quantity: 20,
            price: 25,
        },
        {
            id: 5,
            store_id: 1,
            item_name: "Hydrangeas ",
            colour: "purple",
            category: "primary",
            status: "In Stock",
            quantity: 7,
            price: 15,
        },
        {
            id: 6,
            store_id: 1,
            item_name: "Lilacs",
            colour: "pink",
            category: "primary",
            status: "In Stock",
            quantity: 10,
            price: 12,
        },
        {
            id: 7,
            store_id: 1,
            item_name: "Roses - Pink",
            colour: "pink",
            category: "primary",
            status: "In Stock",
            quantity: 8,
            price: 25,
        },
        {
            id: 8,
            store_id: 1,
            item_name: "Peonies - Pink",
            colour: "pink",
            category: "primary",
            status: "In Stock",
            quantity: 2,
            price: 15,
        },
        {
            id: 9,
            store_id: 1,
            item_name: "Peonies - White",
            colour: "white",
            category: "primary",
            status: "In Stock",
            quantity: 0,
            price: 15,
        },
        {
            id: 10,
            store_id: 1,
            item_name: "Sunflowers",
            colour: "yellow",
            category: "primary",
            status: "In Stock",
            quantity: 2,
            price: 30,
        },

        {
            id: 11,
            store_id: 1,
            item_name: "Eucalyptus",
            colour: "green",
            category: "foliage",
            status: "In Stock",
            quantity: 12,
            price: 10,
        },
        {
            id: 12,
            store_id: 1,
            item_name: "Fern",
            colour: "green",
            category: "foliage",
            status: "In Stock",
            quantity: 10,
            price: 7,
        },
        {
            id: 13,
            store_id: 1,
            item_name: "Myrtle",
            colour: "green",
            category: "foliage",
            status: "In Stock",
            quantity: 8,
            price: 12,
        },
        {
            id: 14,
            store_id: 1,
            item_name: "Vase",
            colour: "clear",
            category: "container",
            status: "In Stock",
            quantity: 3,
            price: 17,
        },
        {
            id: 15,
            store_id: 1,
            item_name: "Kraft Paper",
            colour: "brow",
            category: "container",
            status: "In Stock",
            quantity: 18,
            price: 2,
        },
    ]);
};
