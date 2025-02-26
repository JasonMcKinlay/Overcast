import React, { useState } from "react";
import Logo from "./Logo.jsx";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import Error from "./Error.jsx";
import process from "process";
// import dotenv from "dotenv";
import axios from "axios";
// import weatherIcon from "../../public/assets/weatherIcon.svg";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [cards, setCards] = useState([]);
    const [errorMsg, setErrorMsg] = useState("City not found. Please try again.");
    const [errorOpacity, setErrorOpacity] = useState(0);

    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
      }

    async function addCard(newCard) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${toTitleCase(newCard.city)}&appid=${API_KEY}&units=imperial`;
        try {
            const response = await axios.get(url);
            const city = response.data.name;
            const country = response.data.sys.country;
            const temp = response.data.main.temp;
            const feelsLike = response.data.main.feels_like;
            const windSpeed = response.data.wind.speed;
            const icon = `/assets/${response.data.weather[0].icon}.png`;
            const description = response.data.weather[0].description;

            newCard.city = city;
            newCard.country = country;
            newCard.temp = Math.round(temp);
            newCard.icon = icon;
            newCard.description = toTitleCase(description);
            newCard.feelsLike = Math.round(feelsLike);
            newCard.windSpeed = Math.round(windSpeed);
            
            setCards(prevCards => {
                return([...prevCards, newCard]);
            });
            
        }
        catch (e) {
            handleError(e, newCard.city);
        }
    }

    function deleteCard(id) {
        setCards(prevCards => {
            return prevCards.filter((cardItem, index) => {
                return index !== id;
            })
        });
    }

    function handleError(error, text) {
        if (error.response && error.response.status === 404 && text != null) {
            setErrorMsg("City not found. Please try again.");
            setErrorOpacity(1);
            console.log(error);
        }
        else {
            setErrorMsg("Please enter in a city.");
            setErrorOpacity(1);
            console.log(error);
        }
    }

    return (
        <div>
            <Logo />
            <Error
                msg={errorMsg}
                opacity={errorOpacity}
                setOpacity={setErrorOpacity}
                onAdd={handleError}/>
            <Header onAdd={addCard} className="py-5" />
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