import React from "react";
import Fade from "@mui/material/Fade";
import process from "process";

function Logo() {

    return (
        <div>
            <Fade in={true} timeout={{enter: 1000}}>
                <div className="py-4 d-flex justify-content-center align-items-center">
                    <img src={process.env.PUBLIC_URL + "/assets/header.png"} style={{width: "10%", height: "10%"}}></img>
                </div>
            </Fade>
        </div>
    );
}

export default Logo;