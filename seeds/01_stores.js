/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("stores").del();
    await knex("stores").insert([
        {
            id: 1,
            store_name: "Build a Bouq",
            address: "123 Best St",
            city: "Toronto",
            country: "Canada",
            contact_name: "Taylor B",
            contact_position: "Owner",
            contact_phone: "+1 (646) 123-1234",
            contact_email: "taylor@bouqbuilder.com",
        },
    ]);
};
