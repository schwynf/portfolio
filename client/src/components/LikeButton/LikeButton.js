import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import Confetti from 'react-dom-confetti';
import "./LikeButton.css";

const LikeButton = () => {
    const [showScroll, setShowScroll] = useState("none");
    const [likeBoolean, setLikeBoolean] = useState(false);
    const [bgColor, setBgColor] = useState("blue")

    useEffect(() => {
        return () => { window.removeEventListener("scroll", checkScoll) }
    }, [])

    const checkScoll= () => {
        if (window.pageYOffset > 50 && showScroll === "none") {
            setShowScroll("flex");
        } else if (window.pageYOffset <= 50 && showScroll === "flex") {
            setShowScroll("none")
        }
    }

    window.addEventListener("scroll", checkScoll);

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