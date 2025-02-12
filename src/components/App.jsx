import React, { useState } from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import process from "process";
// import dotenv from "dotenv";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [cards, setCards] = useState([]);

    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
      }

    function addCard(newCard) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${toTitleCase(newCard.city)}&appid=${API_KEY}&units=imperial`;
        axios.get(url)
        .then(function (response) {
            console.log(response.data);
            const city = response.data.name;
            const country = response.data.sys.country;
            const temp = response.data.main.temp;
            const feelsLike = response.data.main.feels_like;
            const windSpeed = response.data.wind.speed;
            const icon = `https://openweathermap.org/img/wn/${
                response.data.weather[0].icon
            }@2x.png`;
            const description = response.data.weather[0].description;

        newCard.country = country;
        newCard.temp = Math.round(temp);
        newCard.icon = icon;
        newCard.description = toTitleCase(description);
        newCard.feelsLike = Math.round(feelsLike);
        newCard.windSpeed = Math.round(windSpeed);
        
        setCards(prevCards => {
            return([...prevCards, newCard]);
        });
    });
    }

    function deleteCard(id) {
        setCards(prevCards => {
            return prevCards.filter((cardItem, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div>
            <Header onAdd={addCard} />
            <ul className="cities">
                <div className="col-lg-12 row justify-content-center">
                    {cards.map((cardItem, index) => {
                        return (
                            <Card 
                            key={index}
                            id={index}
                            city={toTitleCase(cardItem.city)}
                            country={cardItem.country}
                            icon={cardItem.icon}
                            temp={cardItem.temp}
                            description={cardItem.description}
                            feelsLike={cardItem.feelsLike}
                            windSpeed={cardItem.windSpeed}
                            onDelete={deleteCard}
                            />
                        )
                    })}
                </div>
            </ul>
        </div>
    );
}

export default App;