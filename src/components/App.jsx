import React, { useState } from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
// const API_KEY = process.env.REACT_APP_API_KEY; 

function App() {
    const [cards, setCards] = useState([]);

    function addCard(newCard) {
        setCards(prevCards => {
            return([...prevCards, newCard]);
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
                <div class="col-lg-12 row justify-content-center">
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