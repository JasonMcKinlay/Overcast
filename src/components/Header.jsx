import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";

function Header(props) {
    const [cards, setCards] = useState({
        title: ""
    });

    function submitCard(event) {
        props.onAdd(card);
        setCards({
            title: ""
        });
        event.preventDefault();
    }


    return (
        <div className="top-banner container d-flex justify-content-center">
            {/* <Slide in={true} direction="down"> */}
            <Fade in={true} timeout={{enter: 1000}}>
            <div className="py-5 mx-5 my-5 text-auto col-lg-6 align-items-center justify-content-center">
                <h1 className="heading display-5 fw-bold text-body-emphasis text-center">Let's check the weather.</h1>
                    <form className="d-flex align-items-center justify-content-center" method="POST">
                        <div className="input-group" style={{width: "50%"}}>
                            <input type="text" placeholder="Search for a city" className="form-control form-control-dark text-bg-dark col-lg-6" name="cityInput" />
                            <button type="submit" className="btn btn-outline-primary px-4" onClick={submitCard}>Submit</button>
                        </div>
                        <span className="msg ms-3"></span>
                    </form>
          
            </div>
            </Fade>
            {/* </Slide> */}
        </div>
    );
}

export default Header;