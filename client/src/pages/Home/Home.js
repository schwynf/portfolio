//dependencies
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { SocialIcon } from 'react-social-icons';
import Zoom from 'react-reveal/Zoom';
import { ReactSVG } from 'react-svg';
import Reveal from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import LazyLoad from 'react-lazyload';
//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import EmailModal from "../../components/EmailModal/EmailModal";
//images
import profilePic from "../../images/profilePic.jpg";
import backgroundPic from "../../images/distortBottom.svg";
import ProjectVaultPic from "../../images/ProjectVault.JPG";
import Space from "../../images/space.svg";
import SbSquares from "../../images/SbSquares.JPG";
import lockD from "../../images/LOCKD.jpg";
import TriviaPro from "../../images/TriviaPro.JPG";
import BudgetCalculator from "../../images/BudgetCalculator.JPG";
import videoPic from "../../images/video.gif";
//css
import "./Home.css";
// var header = document.getElementById("portfolio-div");
// var sticky = header.offsetTop;




const Home = () => {
    const [counter, setCounter] = useState({
        birthday: 0,
        wedding: 0,
        coding: 0,
        acitveUsers: 0
    });
    
    useEffect(() => {
        // console.log(window.location.protocol)
        //today
        let today = new Date();
        today = today.getTime();
        today = today / 1000 / 60 / 60 / 24;
        //Birthday
        let bDay = new Date("sept 4, 2021");
        bDay = bDay.getTime();
        bDay = bDay / 1000 / 60 / 60 / 24;
        //Wedding day
        let wDay = new Date("oct 9, 2021");
        wDay = wDay.getTime();
        wDay = wDay / 1000 / 60 / 60 / 24;
        //Coding start day
        let cDay = new Date("jan 7, 2019");
        cDay = cDay.getTime();
        cDay = cDay / 1000 / 60 / 60 / 24;

        const socket = socketIOClient();
        socket.on('activeUsersOnWebsite', async (activeUsersData) => {
            setCounter({
                birthday: Math.floor(bDay - today),
                wedding: Math.floor(wDay - today),
                coding: Math.floor(today - cDay),
                acitveUsers: activeUsersData
            });
        });
        
        return () => {
            socket.disconnect();
        }
    }, []);

    const pdf = async () => {
        window.location.href = "/pdf";
    }

    const Loading = () => (
        <div>
            <h1>loading</h1>
        </div>
    )

    return (
        <>
            <div className="container">
                <Navbar></Navbar>
                {/* intro */}
                <div className="row" id="intro-content">
                    <div className="col-sm-6 col-md-12 col-xl-4 intro-img text-center">
                        <Reveal up>
                            <img src={profilePic} className="img-fluid shadow-lg rounded-circle intro-picture" style={{ height: "160px", width: "200px" }} alt="Profile Img"></img>
                            <div className="space" style={{ marginTop: "-38px" }}>
                                <ReactSVG src={Space} />
                            </div>
                        </Reveal>

                    </div>
                    <div className="col-sm-6 col-md-12 col-xl-8 intro-text pb-2">
                        <h5 className="text-secondary">Full Stack Web Developer</h5>
                        <Flash>
                            <h1>Schwyn Francis</h1>
                        </Flash>
                        <p id="pp">Experienced professional with a demonstrated history of client facing work and completing team projects. 2+ years of JavaScript experience. On top of my Bachelors Degree,  I recently earned a Full Stack Web Development certificate from the University of Arizona. I am focused on utilizing my web development skills to help a business grow.</p>
                        <div className="icons">
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                            <div style={{ display: "inline-block" }} data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email" /></div>
                            <div onClick={pdf} style={{ display: "inline-block" }}><SocialIcon bgColor="black" fgColor="white" network="" /></div>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />
                        </div>
                    </div>
                </div>
                {/* <div style={{ height: "2px", backgroundColor: "white" }} ></div> */}
                <div style={{ height: "4px", backgroundColor: "white" }} ></div>
                <h1 className="text-center text-white mt-4 mb-3" id="portfolio-div" style={{ fontFamily: "Train One , cursive" }}>Portfolio</h1>
                <div className="row text-white">
                    <div className="col-12 col-md-4">
                        <Reveal up>
                            <div className="card text-center h-100">
                                <div className="card-body bg-dark grow">
                                    <h5 className="card-title">Project Vault</h5>
                                    <p>Project management software. With Project Vault, users can manage tasks and projects in the office or on the go.</p>
                                    <img src={ProjectVaultPic} className="img-fluid shadow-lg mt-4" alt="Profile Img" style={{ height: "200px", width: "300px" }} ></img>
                                    <p className="card-text">TECH: React, Auth0, Passport.js, MongoDB...</p>
                                    <a href="https://project-management-app-1.herokuapp.com/" class="btn btn-primary">Click Me!</a>
                                </div>
                                <div className="distortTop bg-dark" style={{ marginTop: "-1px" }}>
                                    <ReactSVG src={backgroundPic} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-12 col-md-4">
                        <Reveal up>
                            <div className="card text-center">
                                <div className="card-body bg-dark grow">
                                    <h5 className="card-title">Squares</h5>
                                    <p>Stop using paper to setup squares with friends! This application comes with google login and live chat to allow quick interaction. </p>
                                    <img src={SbSquares} className="img-fluid shadow-lg" style={{ height: "200px", width: "300px" }} alt="Profile Img"></img>
                                    <p className="card-text">TECH: React, Redux, OAuth, Passport.js, Socket.io, MongoDB...</p>
                                    <a href="https://www.thesquaresgame.com" class="btn btn-primary">Click Me!</a>
                                </div>
                                <div className="distortTop bg-dark" style={{ marginTop: "-1px" }}>
                                    <ReactSVG src={backgroundPic} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-12 col-md-4">
                        <Reveal up>
                            <div className="card text-center">
                                <div className="card-body bg-dark grow">
                                    <h5 className="card-title">Lock'D</h5>
                                    <p>Password management software. With Lock'D, users can manage login information safely and verify if password or email has been compromised.</p>
                                    <img src={lockD} className="img-fluid shadow-lg" alt="Profile Img" style={{ height: "200px", width: "300px" }} ></img>
                                    <p className="card-text">TECH: Handlebars, CryptoJS, BcryptJS, Passport.js, MySQL, Bootstrap CSS...</p>
                                    <a href="https://universal-storage.herokuapp.com/" class="btn btn-primary">Click Me!</a>
                                </div>
                                <div className="distortTop bg-dark" style={{ marginTop: "-1px" }}>
                                    <ReactSVG src={backgroundPic} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <div className="row text-white mt-2">
                    <div className="col-12 col-md-4">
                        <Reveal up>
                            <div className="card text-center h-100">
                                <div className="card-body bg-dark grow">
                                    <h5 className="card-title">Trivia-Pro</h5>
                                    <p>Easy application to create, print, and execute quizzes! "Open Trivia Database" API used for quick question generator. Great for learning and fun! </p>
                                    <img src={TriviaPro} className="img-fluid shadow-lg" style={{ height: "200px", width: "300px" }} alt="Profile Img"></img>
                                    <p className="card-text">TECH: JQuery, Choreographer.js, Local Storage, Materialize CSS...</p>
                                    <a href="https://schwynf.github.io/Trivia-Pro/" class="btn btn-primary">Click Me!</a>
                                </div>
                                <div className="distortTop bg-dark" style={{ marginTop: "-1px" }}>
                                    <ReactSVG src={backgroundPic} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-12 col-md-4">
                        <Reveal up>
                            <div className="card text-center h-100">
                                <div className="card-body bg-dark grow">
                                    <h5 className="card-title">Budget Calculator</h5>
                                    <p>Having trouble keeping track of your budget? I got the perfect calculator with graphic visual that can solve your problem.</p>
                                    <img src={BudgetCalculator} className="img-fluid shadow-lg mt-4" style={{ height: "200px", width: "300px" }} alt="Profile Img"></img>
                                    <p className="card-text">TECH: JQuery, Chart.js, MongoDB, Bootstrap CSS...</p>
                                    <a href="https://budget-data.herokuapp.com/" class="btn btn-primary">Click Me!</a>
                                </div>
                                <div className="distortTop bg-dark" style={{ marginTop: "-1px" }}>
                                    <ReactSVG src={backgroundPic} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-12 col-md-4">
                        <Reveal up>
                            <div className="card text-center h-100">
                                <div className="card-body bg-dark grow">
                                    <h5 className="card-title">Employee Dashboard</h5>
                                    <p>This is a command line interface application that generates an employee dashboard depending on user input.</p>
                                    <LazyLoad height={200} offset={100} placeholder={<Loading/>}> 
                                    <img src={videoPic} className="img-fluid shadow-lg mt-4" style={{ height: "200px", width: "300px" }} alt="Profile Img"></img>
                                    </LazyLoad>
                                    <p className="card-text">TECH: Node.js, Jest, RegExp, Bootstrap CSS...</p>
                                    <a href="https://github.com/schwynf/HW-TEAM-DASHBOARD-GENERATOR" class="btn btn-primary">Click Me!</a>
                                </div>
                                <div className="distortTop bg-dark" style={{ marginTop: "-1px" }}>
                                    <ReactSVG src={backgroundPic} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Fun Facts */}
                <div className="row text-white text-center mt-3">
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">
                                Days Coding
                                <Zoom duration={1000}>
                                    <h2 className="text-white">{counter.coding}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">
                                Wedding Countdown
                                <Zoom duration={2000}>
                                    <h2 className="text-white">{counter.wedding}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">
                                Active Users On Website
                                <Zoom duration={3000}>
                                    <h2 className="text-white">{counter.acitveUsers}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">
                                Birthday Countdown
                                <Zoom duration={4000}>
                                    <h2 className="text-white">{counter.birthday}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                {/* Email Modal */}
                <EmailModal></EmailModal>
            </div>
        </>
    )
}

export default Home;