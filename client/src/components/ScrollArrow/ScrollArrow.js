import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./ScrollArrow.css";

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState("none");

    useEffect(() => {
        //  return ()=>{setShowScroll(false);}
    }, [])

    const checkScollTop = () => {
        if (window.pageYOffset > 50) {
            setShowScroll("flex");
        } else if (window.pageYOffset <= 50) {
            setShowScroll("none")
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("scroll", checkScollTop);
    return (
        <>
            <div id="scroll">
                <Link to="top" spy={true} smooth={true} offset={-56} duration={800}>
                    <FaArrowCircleUp className="scrollTop"  style={{ height: 40, display: showScroll }}></FaArrowCircleUp>
                </Link>
            </div>
        </>
    )
}

export default ScrollArrow;