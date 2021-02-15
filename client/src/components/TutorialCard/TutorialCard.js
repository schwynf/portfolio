import React, { useEffect, useState } from "react";
import "./TutorialCard.css"

const TutorialCard = (props) => {

    return (
        <>
            <div className="card card-wrapper">
                <div className="row">
                    <div className="col-5">
                        <img className="card-img" id="card-img" src={props.image} alt="Suresh Dasari Card"></img>
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.body}</p>
                            <a href="#" className="btn btn-outline-primary">View Work</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TutorialCard;