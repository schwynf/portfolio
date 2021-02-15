import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import {FaArrowCircleUp} from "react-icons/fa"
import "./ScrollArrow.css"

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScollTop = () => {
        if(!showScroll && window.pageYOffset > 50){
            setShowScroll(true);
        }else if(showScroll && window.pageYOffset <= 50){
            setShowScroll(false)
        }
    }

    const scrollTop = () =>{
        window.scrollTo({top:0, behavior: "smooth"});
    }

    window.addEventListener("scroll", checkScollTop)
    return (
        <>
          <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height:40,display:showScroll ? 'flex' : "none"}}></FaArrowCircleUp>
        </>
    )
}

export default ScrollArrow;