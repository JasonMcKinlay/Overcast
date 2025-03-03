import React from "react";
import process from "process";

function Card(props) {

    return (
            <li className="col d-inline-flex px-2 py-5 mb-5 mx-3 text-auto col-lg-3 border rounded-3 bg-body-tertiary justify-content-center">
                <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <img src={process.env.PUBLIC_URL + props.icon} alt="weather icon" style={{width: "100px", height: "100px"}}></img>
                    </div>
                    <h4 className="pt-3 text-center">{props.description}</h4>
                </div>
                    
                <div className="col-md-8 ps-3">
                    <div id="location" className="d-flex align-items-center">
                        <h4 className="align-items-center my-1">{props.city}</h4>
                        <span className="mx-2 badge bg-primary">{props.country}</span>
                    </div>
                    <h1 className="align-items-center d-flex fw-bold fs-1">{props.temp}°F</h1>
                    <div id="misc" className="mt-4">
                        <h6 className="fw-lighter">Feels like: {props.feelsLike}°F</h6>
                        <h6 className="fw-lighter">Wind speed: {props.windSpeed} mph</h6>
                    </div>
                </div>
            </li>
    );
}

export default Card;