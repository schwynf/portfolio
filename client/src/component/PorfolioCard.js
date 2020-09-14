import React, { useEffect, useState } from "react";

const PortfolioCard = (props) => {
    return (
        <>
            <img src={props.image} style={{ height: "18rem" }} className="card-img-top img-thumbnail img-fluid" alt="Trivia-Pro"></img>
            <div className="card-body text-dark">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.link} target="_blank" className="btn btn-primary">Try it out!</a>
            </div>
        </>
    )
}

export default PortfolioCard;