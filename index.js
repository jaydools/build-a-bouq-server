const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const storeRoute = require("./routes/stores");
const inventoriesRoute = require("./routes/inventories");

const app = express();
// app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(cors());
app.use(express.json());
app.use("/api/stores", storeRoute);
app.use("/api/inventories", inventoriesRoute);

const port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Listening on port ${port}!`));
