import React from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";

function App() {
    return (
        <div>
            <Header />
            <ul className="cities">
                <div class="row justify-content-center">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </ul>
        </div>
    );
}

export default App;