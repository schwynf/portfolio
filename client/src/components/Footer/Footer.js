//dependencies
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
//css
import "./Footer.css"

const Footer = () => {

    return (
        <>
            <footer>
                <div className="text-center mt-2" style={{fontSize:"20px", color: "#212529"}}>
                &copy; 2020 Copyright: SchwynFrancis.com
                </div>
            </footer>
        </>
    )
}

export default Footer;