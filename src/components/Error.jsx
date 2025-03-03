import React, { useState, useEffect } from "react";

function Error(props) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (props.opacity == 1) {
            setHeight(50);
            const timer = setTimeout(() => {
                handleClick();
            }, 3000);

            return () => { clearTimeout(timer); }
        }
    });

    function handleClick() {
        props.setOpacity(0);
        setHeight(0);
    }

    return (
        <div className="mx-auto col-lg-3 alert alert-primary alert-dismissible fade show" role="alert" style={{
            opacity: props.opacity,
            height: height,
            overflow: "hidden",
            transition: "opacity 0.5s ease-in-out, height 0.5s ease-in-out",
            padding: "12px"
        }}>
                {props.msg}
                <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="alert" 
                aria-label="Close"
                onClick={handleClick}>
                </button>
            </div>
    );
}

export default Error;