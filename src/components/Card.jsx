import React from "react";

function Card(props) {
    return (
            <li className="col d-inline-flex px-2 py-5 mb-5 mx-3 text-auto col-lg-3 border rounded-3 bg-body-tertiary justify-content-center">
                <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
                            <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
                            <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                        </svg>
                    </div>
                    <h4 className="pt-3 text-center">Partly cloudy</h4>
                </div>
                    
                <div className="col-md-8 ps-3">
                    <h4 className="align-items-center d-flex">{props.city}</h4>
                    <h1 className="align-items-center d-flex fw-bold fs-1">67°F</h1>
                </div>
            </li>
    );
}

export default Card;