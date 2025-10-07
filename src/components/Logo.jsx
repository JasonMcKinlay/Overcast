import React from "react";
import Fade from "@mui/material/Fade";

function Logo() {

    return (
        <div>
            <Fade in={true} timeout={{enter: 1000}}>
                <div className="py-4 d-flex justify-content-center align-items-center">
                    <img src="/header.png" style={{width: "10%", height: "10%"}} alt="overcast logo"></img>
                </div>
            </Fade>
        </div>
    );
}

export default Logo;