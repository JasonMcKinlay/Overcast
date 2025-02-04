import React, { useState } from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";

function App() {
    const [cards, setCards] = useState([]);

    function addCard(newCard) {
        setCards(prevCards => {
            return([...prevCards, newCard]);
        })
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
                            title="Northumberland"
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