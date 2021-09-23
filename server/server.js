const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();
const port = 8000;

app.use(express.json(), cors());
app.use(express.urlencoded({ extended: true }));

db;

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});