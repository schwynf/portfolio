//dependencies
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Confetti from 'react-dom-confetti';
//components
import LikeButton from "../../components/LikeButton/LikeButton";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
//images
import ngNewQuestionsPic from "../../images/ngNewQuestions.JPG";
import Pic from "../../images/angularFirstView.JPG";
import directoryPic from "../../images/angularDirectory.JPG";
import navPic from "../../images/navPic.JPG";
import routesPic from "../../images/routesPic.JPG";
import appModulePic from "../../images/appModulePic.JPG";
import servicePic from "../../images/servicePic.JPG";
import serviceFunctionPic from "../../images/serviceFunctionsPic.JPG";
import formMessagePic from "../../images/formMessagePic.JPG";
import messageForm from "../../images/messageForm.JPG";
import serverMiddleware from "../../images/serverMiddleware.JPG";
import serverRoutes from "../../images/serverRoutes.JPG";
import modelPic from "../../images/modelPic.JPG";
import messageExport from "../../images/messageExport.JPG";
//css
import "./TutorialId.css";


const TutorialId = (props) => {

    useEffect(() => {
        const socket = socketIOClient();
        return () => socket.disconnect();
    }, []);


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
                            <h5>Prerequistes:</h5>
                            <ul>
                                <li>
                                    Node.js
                                 </li>
                                <li>
                                    MongoDB
                                </li>
                                <li>
                                    Visual Studio Code
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
                            <div className="img-scroll" id="ngNewPic">

                                <img className="w-100" src={ngNewQuestionsPic}></img>
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

                                <img className="mt-2 mb-2 w-90 angular-pic" src={Pic}></img>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 2 */}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h4>STEP 2: GENERATE COMPONENTS</h4>
                            <p> Go to src/app and create 2 folders within app directory "components" and "pages"</p>
                            <div className="text-center">
                                <img className="mt-2 mb-2" style={{ height: "250px" }} src={directoryPic}></img>
                            </div>
                            <p>Go to "pages" folder in terminal.</p>
                            <p>In terminal:</p>
                            <ul>
                                <li>
                                    <code>ng generate component home</code>
                                </li>
                                <li>
                                    <code>ng generate component contact</code>
                                </li>
                            </ul>
                            <p>Go to "components" folder in terminal.</p>
                            <p>In terminal:</p>
                            <ul>
                                <li>
                                    <code>ng generate component navbar</code>
                                </li>
                                <li>
                                    <code>ng generate component formMessages</code>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 3 */}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h4>STEP 3: ADD NAVBAR COMPONENT TO APP.COMPONENT.HTML</h4>
                            <p> Go to app/app.component.html</p>
                            <li>Delete all html</li>
                            <li>add navbar component to hmtl <code className="comp-color">&#60;app-navbar&#62;&#60;/app-navbar&#62;</code></li>
                            <p>In terminal: <code>ng serve -o</code></p>
                            <p>you should see "navbar works"</p>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 4 */}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h4>STEP 4: ADD BOOTSTRAP CSS TO THE APPLICATION</h4>
                            <p> To access bootstrap go to index.html within src folder</p>
                            <li>Add link in head of html:<code className="comp-color"> &#60;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                            rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"&#62;
                            </code></li>
                            <li>Add link before end body tag:<code className="comp-color"> &#60;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"&#62;
                            </code></li>
                            <p style={{ wordWrap: "break-word" }}>Copy bootstrap navbar html from website (https://getbootstrap.com/docs/5.0/components/navbar/) to navbar.component.html. After editing links to fit our app, the html should look like this:</p>
                            <div className="img-scroll">

                                <img className="mt-2 mb-2 w-100" src={navPic} id="navPic"></img>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 5*/}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h4>STEP 5: ROUTING PAGES</h4>
                            <p>Go to app folder in terminal.</p>
                            <p>In terminal: <code>ng generate module app-routing --flat --module=app</code></p>
                            <p>go to app-routing.module.ts file and update:</p>
                            <div className="img-scroll">
                                <img className="mt-2 mb-2 w-100" src={routesPic} id="routesPic"></img>
                            </div>
                            <p>Go to app.component.html and add under &#60;app-navbar&#62;: <code className="comp-color">&#60;router-outlet&#62;&#60;/router-outlet&#62;</code></p>
                            <p>In terminal: <code>ng serve -o</code></p>
                            <p>The navbar links should work.</p>
                        </div>

                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 6*/}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h4>STEP 6: CREATE MESSAGE-SERVICE</h4>
                            <p>Go to app folder and create a folder called services.</p>
                            <p>Go to services folder in terminal.</p>
                            <p>In terminal: <code>ng generate service message</code></p>
                            <p>Add messageService to provider and HttpClientModule to imports:</p>
                            <div className="img-scroll">
                                <img className="mt-2 mb-2 w-100" src={appModulePic} id="appModulePic"></img>
                            </div>
                            <p>Update message-service:</p>
                            <div className="img-scroll" id="scroll-service">
                                <img className="mt-2 mb-2 w-100" src={servicePic} id="servicePic"></img>
                            </div>
                            <p>Service Functions:</p>
                            <div className="img-scroll" id="scroll-service">
                                <img className="mt-2 mb-2 w-100" src={serviceFunctionPic} id="serviceFunctionPic"></img>
                            </div>
                            <p>Update form-messages.component.ts:</p>
                            <div className="img-scroll" id="scroll-service">
                                <img className="mt-2 mb-2 w-100" src={formMessagePic} id="formMessagePic"></img>
                            </div>
                            <p>Update form-message.component.html:</p>
                            <div className="img-scroll" id="scroll-service">
                                <img className="mt-2 mb-2 w-100" src={messageForm} id="messageFormPic"></img>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 7*/}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h4>STEP 7: SETUP SERVER</h4>
                            <p>Go to terminal in root directory:</p>
                            <li>
                                <code>npm i express</code>
                            </li>
                            <li>
                                <code>npm install concurrently --save</code>
                            </li>
                            <p>create server.js file in root directory and update:</p>
                            <div className="img-scroll" id="scroll-service">
                                <img className="mt-2 mb-2 w-100" src={serverMiddleware} id="serverMiddlewarePic"></img>
                            </div>
                            <p>update server with routes:</p>
                            <div className="img-scroll" id="scroll-service">
                                <img className="mt-2 mb-2 w-100" src={serverRoutes} id="serverMiddlewarePic"></img>
                            </div>

                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 8*/}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                            <h4>STEP 8: SETUP MODEL FOR MONGOOSE</h4>
                            <p>In root directory, create a models folder and add "message.js".</p>
                            <p>Update file:</p>
                            <div className="img-scroll" id="scroll-service">
                                <img className="mt-2 mb-2 w-100" src={modelPic} id="modelPic"></img>
                            </div>
                            <p>add index.js file within models folder and update:</p>
                            <div id="model-div">
                                <img className="mt-2 mb-2 w-100" src={messageExport} id="messageExport"></img>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 9*/}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    {/* STEP 10*/}
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-12 col-sm-8">
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    <Footer></Footer>
                    <LikeButton></LikeButton>
                    
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