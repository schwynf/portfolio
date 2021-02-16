import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import soonPic from "../../images/soon.jpeg";
import TutorialCard from "../../components/TutorialCard/TutorialCard"
import "./Tutorial.css";

const Tutorial = () => {

    return (
        <>
            <div className="container">
                <Navbar></Navbar>
                <h1 className="title">Tutorial</h1>
                <div className="row mt-5">
                    <div className="col-12 tutorial-card-wrapper">
                        <TutorialCard title="Angular, Node, MongoDB & Heroku" body="20 minute startup guide!" buttonLink="angular" image={soonPic}></TutorialCard>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-12 tutorial-card-wrapper">
                    <TutorialCard title="React, Node, MongoDB & Heroku" body="20 minute startup guide!" buttonLink="react" image={soonPic}></TutorialCard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tutorial;