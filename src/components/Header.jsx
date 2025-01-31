import React from "react";

function Header() {
    return (
        <div className="top-banner container d-flex justify-content-center">
            <div className="py-5 mx-5 my-5 text-auto col-lg-6 align-items-center justify-content-center">
                <h1 className="heading display-5 fw-bold text-body-emphasis text-center">Let's check the weather.</h1>
                    <form className="d-flex align-items-center justify-content-center" method="POST">
                        <div className="input-group" style={{width: "50%"}}>
                            <input type="text" placeholder="Search for a city" className="form-control form-control-dark text-bg-dark col-lg-6" name="cityInput" />
                            <button type="submit" className="btn btn-outline-primary px-4">Submit</button>
                        </div>
                        <span className="msg ms-3"></span>
                    </form>
          
            </div>
        </div>
    );
}

export default Header;