import React, { useEffect, useState } from "react";
import "./TutorialCard.css"
import { Link } from 'react-router-dom';

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
                            <Link className="btn btn-outline-primary" to={"/tutorial/" + props.buttonLink }>View Work</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TutorialCard;