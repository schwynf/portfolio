//dependencies
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
//images
import logo from "../../images/logo2.svg"
//css
import "./Navbar.css"

const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bar" id="top">
                <Link to="/">
                    <div id="logo" style={{ width: "75px", height: "75px" }}>
                        <ReactSVG src={logo} />
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">About</Link>
                        <Link className="nav-item nav-link active" to="/portfolio">Portfolio</Link>
                        <li className="nav-item dropdown active text-white">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tutorials
                            </a>
                            <div className="dropdown-menu" style={{backgroundColor:"black"}} aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item text-white" id="angular" to="/tutorial/angular">MEAN Stack</Link>
                                <a className="dropdown-item deactive text-white" id="react" href="#">MERN Stack</a>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;