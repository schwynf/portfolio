//dependencies
import React, { useEffect, useState } from "react";
import { ReactSVG } from 'react-svg';
import LazyLoad from 'react-lazyload';
//imgages
import backgroundPic from "../../images/distortBottom.svg";
//css
import "./PortfolioCard.css";

const Loading = () => (
    <div>
        <h1>loading</h1>
    </div>
)
const goTo = (event) => {
    window.location = event.target.id
}

const PortfolioCard = (props) => {
    return (
        <>
            <div className="card text-center h-100">
                <div className="card-body grow" style={{backgroundColor: "black" }}>
                    <h5 className="card-title" style={{fontWeight:"200"}}>{props.title}</h5>
                    <p style={{fontWeight:"100"}}>{props.content}</p>
                    <LazyLoad height={200} offset={100} placeholder={<Loading />}>
                        <img src={props.picture} id={props.link} onClick={goTo} className={props.class} alt="Profile Img" style={{ height: "200px", width: "300px" }} ></img>
                    </LazyLoad>
                    <p className="card-text" style={{fontWeight:"100"}}>{props.tech}</p>
                    <div style={{ paddingLeft: "120px" }}>
                        <div class="blob" id={props.link} onClick={goTo}></div>
                    </div>
                    {/* <a id="click-me" href={props.link}>Click Me!</a> */}
                </div>
                <div className="distortTop" style={{ marginTop: "-1px", backgroundColor:"black"}}>
                    <ReactSVG src={backgroundPic} />
                </div>
            </div>
        </>
    )
}

export default PortfolioCard;