import React, { useEffect, useState } from "react";
import "./Navbar.css"

const Navbar = () => {



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bar">
                <h1 onClick={()=>{
                    window.location.href="/"
                }} style={{fontFamily:"cursive", color:"#ffc107"}}>SF</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">About<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="/portfolio">Portfolio</a>
                        <a className="nav-item nav-link active" href="#">Tutorial</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;