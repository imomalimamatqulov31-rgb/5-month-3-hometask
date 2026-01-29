require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dbConenction = require("./lib/db.service");
const mainRouter = require("./router/main.routes");

dbConenction().catch(() => process.exit(1));



const app = express();
app.use(express.json());

app.use("/api", mainRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));