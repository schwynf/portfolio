import React, { useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons';
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bar">
                {/* <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" /> */}
                {/* <a className="navbar-brand" href="/">SF</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">About<span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="/portfolio">Portfolio</a>
                        <a className="nav-item nav-link active" href="/resume">Resume</a>
                        <a className="nav-item nav-link active" href="#" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;