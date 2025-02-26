import React, { useState } from "react";

function Error(props) {
    // const [opacity, setOpacity] = useState({
    //     opacity: 0
    // });

    function handleClick() {
        props.setOpacity(0);
    }

    return (
        <div class="mx-auto col-lg-3 alert alert-primary alert-dismissible fade show" role="alert" style={{ opacity: props.opacity }}>
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