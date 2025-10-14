import React, { useState } from "react";
import Fade from "@mui/material/Fade";

function Header(props) {
    const [text, setText] = useState({
        city: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setText(prevText => {
            return {
                ...prevText,
                [name]: value
            };
        });
    }

    function submitText(event) {
        event.preventDefault();
        props.onAdd(text);
        setText({ city: "" });
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            submitText(event);
        }
    }

    return (
        <div className="top-banner container justify-content-center">
            <Fade in={true} timeout={{enter: 1000}}>
            <div className="pb-5 mx-5 mb-5 text-auto col-lg-6 align-items-center justify-content-center mx-auto">
                <h1 className="heading display-5 fw-bold text-body-emphasis text-center pb-3">Let's check the weather.</h1>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{width: "50%"}}>
                        <input 
                            type="text" 
                            placeholder="Search for a city" 
                            className="form-control col-lg-6" 
                            name="city" 
                            value={text.city}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <button type="submit" className="btn btn-outline-primary px-4" onClick={submitText}>Submit</button>
                    </div>
                    <span className="msg ms-3"></span>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Header;