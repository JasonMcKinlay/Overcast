import React, { useState } from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import process from "process";
// import dotenv from "dotenv";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY; 

function App() {
    const [cards, setCards] = useState([]);

    function addCard(newCard) {
        //const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityInput}&appid=${API_KEY}&units=imperial`;
        setCards(prevCards => {
            return([...prevCards, newCard]);
        });
        console.log("TEST:", API_KEY);
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
                            city={cardItem.city}
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