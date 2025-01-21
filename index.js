import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = 3000;
const API_KEY = process.env.API_KEY;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.post("/", async (req, res) => {
    console.log(req.body.cityInput);
    res.render("index.ejs")
})

app.listen(port, (req, res) => { console.log(`Server running on port ${port}.`) });