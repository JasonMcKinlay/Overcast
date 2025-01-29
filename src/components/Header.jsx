import React from "react";

function Header() {
    return (
        <div>
            <div class="py-5 mx-5 my-5 text-auto col-lg-6 align-items-center justify-content-center">
                <h1 class="heading display-5 fw-bold text-body-emphasis text-center">Let's check the weather.</h1>
                    <form class="d-flex align-items-center justify-content-center" method="POST">
                        <div class="input-group" style="width: 50%">
                            <input type="text" placeholder="Search for a city" class="form-control form-control-dark text-bg-dark col-lg-6" name="cityInput" autofocus />
                            <button type="submit" class="btn btn-outline-primary px-4">Submit</button>
                        </div>
                        <span class="msg ms-3"></span>
                    </form>
          
            </div>
        </div>
    );
}

export default Header;