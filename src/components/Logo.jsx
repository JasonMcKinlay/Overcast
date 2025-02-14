import React from "react";
import Fade from "@mui/material/Fade";

function Logo() {

    return (
        <div>
            <Fade in={true} timeout={{enter: 1000}}>
                <div className="py-5 d-flex justify-content-center align-items-center">
                    <img src="/assets/header.png" style={{width: "10%", height: "10%"}}></img>
                </div>
            </Fade>
        </div>
    );
}

export default Logo;