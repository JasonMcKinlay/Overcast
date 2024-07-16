import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.listen(port, (req, res) => { console.log(`Server running on port ${port}.`) });