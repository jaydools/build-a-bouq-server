/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("images").del();
    await knex("images").insert([
        {
            id: 1,
            item_id: 1,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Lillies/kxji6qgkb9hzefwcxrhn",
        },
        {
            id: 2,
            item_id: 1,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Lillies/pninvalmy2knefw09kcc",
        },
        {
            id: 3,
            item_id: 1,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Lillies/ipsjwbqkzfg1kxh1rxmu",
        },
        {
            id: 4,
            item_id: 1,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Lillies/zvyvzbd4ocql7etgfulk",
        },
        {
            id: 5,
            item_id: 2,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/red/rrb2bgkmncsmn57mtlvz",
        },
        {
            id: 6,
            item_id: 2,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/red/pkoe7japihqc4vegbgob",
        },
        {
            id: 7,
            item_id: 2,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/red/tihl0rlddx3mnjp5lozl",
        },
        {
            id: 8,
            item_id: 3,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/white/mg8m7ulkeyhbitynxs1f",
        },
        {
            id: 9,
            item_id: 3,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/white/fs7wraf6oxzzzzgdma7d",
        },
        {
            id: 10,
            item_id: 3,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/white/hq8oysezee7c2sisbw3q",
        },
        {
            id: 11,
            item_id: 4,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Carnations/ccgkxvxjxa53yyfhyvsq",
        },
        {
            id: 12,
            item_id: 4,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Carnations/bt4ynwiavebrzmyv7mae",
        },
        {
            id: 13,
            item_id: 4,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Carnations/x5tenbs9r7avywllrr8p",
        },
        {
            id: 14,
            item_id: 4,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Carnations/exhe8dewqgw8rrzq8bah",
        },
        {
            id: 15,
            item_id: 5,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Hydrangeas/zn3flaalctggqtbi1ym9",
        },
        {
            id: 16,
            item_id: 5,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Hydrangeas/il6bs4lfhgsi5alz40ai",
        },
        {
            id: 17,
            item_id: 5,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Hydrangeas/jxng42zaqoxfumrhbbsp",
        },
        {
            id: 18,
            item_id: 6,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/lilacs/nw207yqxpju5fkwp4blk",
        },
        {
            id: 19,
            item_id: 6,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/lilacs/nxjz95bsegvshzmrtfcq",
        },
        {
            id: 20,
            item_id: 6,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/lilacs/jqyktcbsmnxcgqqlqfxn",
        },
        {
            id: 21,
            item_id: 7,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/pink/xtzotf1oig3oybyh8ugi",
        },
        {
            id: 22,
            item_id: 7,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/pink/zv14lc307cxnzdxtpgg1",
        },
        {
            id: 23,
            item_id: 7,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/pink/mkiq0igw0k6upjuw2nxc",
        },
        {
            id: 24,
            item_id: 7,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Roses/pink/v5cdwzbmrxtek75pq3ao",
        },
        {
            id: 25,
            item_id: 8,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Peonies/ilh0dqstwwu4ksgi5ddx",
        },
        {
            id: 26,
            item_id: 8,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Peonies/b8ty4agozxfkxawvrsam",
        },
        {
            id: 27,
            item_id: 8,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Peonies/hz9vvqwn27l2yfawrxad",
        },
        {
            id: 28,
            item_id: 10,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Sunflowers/epd3rjxfvuxor879cpzt",
        },
        {
            id: 29,
            item_id: 10,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Sunflowers/lghepfl8meo3x7kgyjxf",
        },
        {
            id: 30,
            item_id: 11,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Eucalyptus/wikivauifnjiykf8ivsx",
        },
        {
            id: 31,
            item_id: 11,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Eucalyptus/gfr8zgdl8rkjb6rlq5un",
        },
        {
            id: 32,
            item_id: 11,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Eucalyptus/rzqr8y75qbkpmmssrppi",
        },
        {
            id: 33,
            item_id: 12,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Fern/sb5mpg1paysaomakzmlb",
        },
        {
            id: 34,
            item_id: 12,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Fern/npkjjbxqz5tamqjblloj",
        },
        {
            id: 35,
            item_id: 12,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Fern/t2xrzzir7ixkkegczjyg",
        },
        {
            id: 36,
            item_id: 13,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/myrtle/uxu82dxudyxcobqq1dup",
        },
        {
            id: 37,
            item_id: 13,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/myrtle/ewsizcbzudisd4i63glb",
        },
        {
            id: 38,
            item_id: 13,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/myrtle/o6wsq3rdpbl2jzyf6kq3",
        },
        {
            id: 39,
            item_id: 14,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Container/ogrktrmh6heoxvhzswru",
        },
        {
            id: 40,
            item_id: 15,
            url: "https://res.cloudinary.com/dxay0tp2l/image/upload/f_auto,q_auto/v1/build-a-bouq/Container/kn1t9tt3nf1w0efl0pmb",
        },
    ]);
};
