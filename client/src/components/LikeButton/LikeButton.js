//dependencies
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineConsoleSql } from "react-icons/ai";
import Confetti from 'react-dom-confetti';
//css
import "./LikeButton.css";

const LikeButton = (props) => {
    const [showScroll, setShowScroll] = useState("none");
    const [bgColor, setBgColor] = useState("blue")

    useEffect(() => {
        window.addEventListener("scroll", checkScrollLike);
        return () => { 
            console.log("likeButton useEffect")
            window.removeEventListener("scroll", checkScrollLike);
        }
    }, [showScroll])

    const checkScrollLike= () => {
        console.log(window.pageYOffset + " " + showScroll)
        if (window.pageYOffset > 50 && showScroll === "none") {
            setShowScroll("flex");
        } else if (window.pageYOffset <= 50 && showScroll === "flex") {
            setShowScroll("none")
        } 
    }

    const colorChange = () => {
        setBgColor("white")
    }

    return (
        <>
            <div id="scroll-like" onClick={colorChange}>
                <AiFillLike className="scrollTop-like" style={{ height: 40, display: showScroll, color: bgColor }}></AiFillLike>
            </div>
        </>
    )
}

export default LikeButton;