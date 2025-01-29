import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import "dotenv/config";

//const form = document.querySelector(".top-banner form");
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
        const city = response.data.name;
        const country = response.data.sys.country;
        const temp = response.data.main.temp;
        const feelsLike = response.data.main.feelsLike;
        const windSpeed = response.data.wind.speed;
        const icon = `https://openweathermap.org/img/wn/${
            response.data.weather.icon
          }@2x.png`;
        const description = response.data.weather.description;
    });

    // const li = document.createElement("li");
    // li.classList.add("city");
    // const markup = ` 
    // <h2 class="city-name" data-name="${city},${country}"> 
    // <span>${city}</span> 
    // <sup>${country}</sup> 
    // </h2> 
    // <div class="city-temp">${Math.round(temp)}<sup>°C</sup> 
    // </div> 
    // <figure> 
    // <img class="city-icon" src=${icon} alt=${description}> 
    // <figcaption>${description}</figcaption> 
    // </figure> 
    // `;
    // li.innerHTML = markup;
    // list.appendChild(li);

    res.render("index.ejs")
})

app.listen(port, (req, res) => { console.log(`Server running on port ${port}.`) });