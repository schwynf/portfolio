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

const PortfolioCard = (props) => {
    return (
        <>
            <div className="card text-center h-100">
                <div className="card-body bg-dark grow">
                    <h5 className="card-title">{props.title}</h5>
                    <p>{props.content}</p>
                    <LazyLoad height={200} offset={100} placeholder={<Loading />}>
                        <img src={props.picture} className={props.class} alt="Profile Img" style={{ height: "200px", width: "300px" }} ></img>
                    </LazyLoad>
                    <p className="card-text">{props.tech}</p>
                    <div style={{ paddingLeft: "120px" }}>
                        <div class="blob" href={props.link}></div>
                    </div>
                    <a id="click-me" href={props.link}>Click Me!</a>
                </div>
                <div className="distortTop bg-dark" style={{ marginTop: "-1px" }}>
                    <ReactSVG src={backgroundPic} />
                </div>
            </div>
        </>
    )
}

export default PortfolioCard;