import React, { useEffect, useState } from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import logo from "../../images/logo2.svg"

const Navbar = () => {



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bar" id="top">
                <div id="logo" style={{ width: "75px", height: "75px" }}>
                    <ReactSVG src={logo} />
                </div>
                {/* <Link to="/">< h4 style={{ fontFamily: "Lucida Console, Courier New, monospace", color: "rgb(8, 19, 78)", fontSize: "2rem", backgroundColor: "black" }}>SF</h4></Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">About</Link>
                        <Link className="nav-item nav-link active" to="/portfolio">Portfolio</Link>
                        <li className="nav-item dropdown active text-white">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tutorial
                            </a>
                            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/tutorial/angular">Angular</a>
                                <a className="dropdown-item deactive" href="#">React</a>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;