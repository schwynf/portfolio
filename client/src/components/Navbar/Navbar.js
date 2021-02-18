import React, { useEffect, useState } from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bar" id="top">
                <Link to="/">< h4 style={{fontFamily:"Lucida Console, Courier New, monospace", color:"rgb(8, 19, 78)", fontSize:"2rem", backgroundColor:"black"}}>SF</h4></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">About</Link>
                        <Link className="nav-item nav-link active" to="/portfolio">Portfolio</Link>
                        <Link className="nav-item nav-link active" to="/tutorial">Tutorial</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;