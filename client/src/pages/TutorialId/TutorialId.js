import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./TutorialId.css";
import ngNewQuestionsPic from "../../images/ngNewQuestions.JPG"
import Pic from "../../images/angularFirstView.JPG"

const TutorialId = (props) => {



    if (props.match.params.id === "angular") {
        return (
            <>
                <div className="container text-white">
                    <Navbar></Navbar>
                    <h1 className="title">Angular</h1>
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h5>Prequistes:</h5>
                            <ul>
                                <li>
                                    Node.js
                                 </li>
                                <li>
                                    MongoDB
                                 </li>
                                <li>
                                    MongoDB Atlas account
                                 </li>
                                <li>
                                    Heroku account
                                 </li>
                                <li>
                                    Github account
                                 </li>
                                <li>
                                    Visual Studio Code "IDE"
                                 </li>
                            </ul>
                            <h4>STEP 1: INSTALLING ANGULAR CLI AND GENERATING ANGULAR APP</h4>
                            <p>Create a new directory: documents/node-apps</p>
                            <p>In terminal:</p>
                            <ul>
                                <li>
                                    <code>npm install -g @angular/cli </code>
                                </li>
                                <li>
                                    <code>ng new angular-node-app </code>Generates the angular app
                                </li>
                            </ul>
                            <div className="img-scroll">

                                <img className="mt-2 mb-2 mr-5" src={ngNewQuestionsPic}></img>
                            </div>
                            <ul>
                                <li>
                                    <code>cd angular-node-app </code>Changes into angular-node-app directory
                                 </li>
                                <li>
                                    <code>code . </code>Opens app in visual studio code
                                 </li>
                            </ul>

                            <p>Open up a terminal under root directory within Visual Studio Code</p>
                            <p>In terminal:</p>
                            <li>
                                <code>ng serve -o</code> Starts app, server runs on http://localhost:4200
                            </li>
                            <div className="img-scroll text-center">

                                <img className="mt-2 mb-2 mr-5" src={Pic}></img>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>
            </>
        )

    }

    if (props.match.params.id === "react") {
        return (
            <>
                <div className="container">
                    <Navbar></Navbar>
                    <h1 className="title">React</h1>
                </div>
            </>
        )

    }
}

export default TutorialId;