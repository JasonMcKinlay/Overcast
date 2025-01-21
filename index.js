import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityInput}&appid=${API_KEY}&units=imperial`;
    axios.get(url)
    .then(function (response) {
        console.log(response.data);
    });
    res.render("index.ejs")
})

app.listen(port, (req, res) => { console.log(`Server running on port ${port}.`) });