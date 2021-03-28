//dependencies
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { SocialIcon } from 'react-social-icons';
import Zoom from 'react-reveal/Zoom';
import { ReactSVG } from 'react-svg';
import Reveal from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import EmailModal from "../../components/EmailModal/EmailModal";
import ProjectRevolver from "../../components/ProjectRevolver/ProjectRevolver";
import ProjectBullet from "../../components/ProjectBullet/ProjectBullet";
import Flask from "../../components/Flask/Flask";
//images
import profilePic from "../../images/profilePic.jpg";
import backgroundPic from "../../images/distortBottom.svg";
import ProjectVaultPic from "../../images/ProjectVault.JPG";
import Space from "../../images/space.svg";
//css
import "./Home.css";




const Home = () => {
    const [counter, setCounter] = useState({
        birthday: 0,
        wedding: 0,
        coding: 0,
        acitveUsers: 0
    });
    const [spin, setSpin] = useState("preset-revolver");
    const [bulletGlide, setBulletGlide] = useState("");
    const [bulletName, setBulletName] = useState("");
    const [none, setNone] = useState("none");
    const [triviaRemove, setTriviaRemove] = useState("");
    const [expenseRemove, setExpenseRemove] = useState("");
    const [projectRemove, setProjectRemove] = useState("");
    const [lockRemove, setLockRemove] = useState("");
    const [squaresRemove, setSquaresRemove] = useState("");
    const [dashboardRemove, setDashboardRemove] = useState("");
    let selectProject;
    let goToWebsite;

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

    const spinRevolver = () => {
        let spinChoices = ["revolver", "revolver1", "revolver2", "revolver3", "revolver4", "revolver5"];
        let choice = Math.floor(spinChoices.length * Math.random());
        setSpin(spinChoices[choice]);
        selectProject = setTimeout(() => {
            let bulletsHeight = {
                trivia: document.getElementsByClassName("trivia-circle")[0].getBoundingClientRect().top,
                expense: document.getElementsByClassName("expense-circle")[0].getBoundingClientRect().top,
                project: document.getElementsByClassName("project-circle")[0].getBoundingClientRect().top,
                lock: document.getElementsByClassName("lock-circle")[0].getBoundingClientRect().top,
                squares: document.getElementsByClassName("squares-circle")[0].getBoundingClientRect().top,
                dashboard: document.getElementsByClassName("dashboard-circle")[0].getBoundingClientRect().top
            }
            let bulletsHeightSorted = Object.keys(bulletsHeight).sort(function (a, b) {
                return bulletsHeight[a] - bulletsHeight[b];
            })
            //removing bullet
            if (bulletsHeightSorted[0] === "trivia") {
                setTriviaRemove("removeBullet");
                setBulletName("TRIVIA");
            } else if (bulletsHeightSorted[0] === "expense") {
                setExpenseRemove("removeBullet");
                setBulletName("EXPENSE");
            } else if (bulletsHeightSorted[0] === "project") {
                setProjectRemove("removeBullet")
                setBulletName("PROJECT");
            } else if (bulletsHeightSorted[0] === "lock") {
                setLockRemove("removeBullet")
                setBulletName("LOCK'D");
            } else if (bulletsHeightSorted[0] === "squares") {
                setSquaresRemove("removeBullet")
                setBulletName("SQUARES");
            } else {
                setDashboardRemove("removeBullet")
                setBulletName("DASHBOARD");
            }
            setBulletGlide("bullet-div");
            setNone("");
            goToWebsite = setTimeout(function () {
                clearTimeout(selectProject);
                clearTimeout(goToWebsite);
                setSpin("preset-revolver");
                setNone("none");
                setBulletGlide("");
                setTriviaRemove("");
                setExpenseRemove("");
                setProjectRemove("");
                setLockRemove("");
                setSquaresRemove("");
                setDashboardRemove("");
                if (bulletsHeightSorted[0] === "trivia") {
                    window.location.href = "https://schwynf.github.io/Trivia-Pro/";
                } else if (bulletsHeightSorted[0] === "expense") {
                    window.location.href = "https://budget-data.herokuapp.com/";
                } else if (bulletsHeightSorted[0] === "project") {
                    window.location.href = "https://project-management-app-1.herokuapp.com/";
                } else if (bulletsHeightSorted[0] === "lock") {
                    window.location.href = "https://universal-storage.herokuapp.com/";
                } else if (bulletsHeightSorted[0] === "squares") {
                    window.location.href = "https://www.thesquaresgame.com/";
                } else {
                    window.location.href = "https://github.com/schwynf/HW-TEAM-DASHBOARD-GENERATOR";
                }
            }, 1500)
        }, 5000)
    }

    return (
        <>
            <div className="container">
                <Navbar></Navbar>
                {/* intro */}
                <div className="row" id="intro-content">
                    <div className="col-sm-6 col-md-12 col-xl-6 intro-img text-center">
                        <Reveal up>
                            <img src={profilePic} className="img-fluid shadow-lg rounded-circle intro-picture" alt="Profile Img"></img>
                            <div className="space" style={{ marginTop: "-7px" }}>
                                <ReactSVG src={Space} />
                            </div>
                        </Reveal>
                        
                    </div>
                    <div className="col-sm-6 col-md-12 col-xl-6 intro-text pb-2">
                        <h5 className="text-secondary">Full Stack Web Developer</h5>
                        <Flash>

                            <h1>Schwyn Francis</h1>
                        </Flash>
                        <p id="pp">Experienced professional with a demonstrated history of client facing work and completing team projects. 2+ years of JavaScript experience. On top of my Bachelors Degree,  I recently earned a Full Stack Web Development certificate from the University of Arizona. I am currently focused on utilizing my web development skills to help a business grow. Main focus is MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
                        <div className="icons">
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                            <div style={{ display: "inline-block" }} data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email" /></div>
                            <div onClick={pdf} style={{ display: "inline-block" }}><SocialIcon bgColor="black" fgColor="white" network="" /></div>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />
                        </div>
                    </div>
                </div>
                <div className="distortTop" style={{ marginTop: "-1px" }}>
                    <ReactSVG src={backgroundPic} />
                </div>


                {/* What I Do */}
                <div className="row text-white pr-2 pl-2 mt-3" style={{ backgroundColor: "black", width: "99.99%", marginLeft: "0.2px" }}>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-2">
                                <div style={{ width: "50px", height: "100px" }}>
                                    <Flask></Flask>
                                </div>
                            </div>
                            <div className="col-8">
                                <Reveal left>
                                    <p className="text-primary" style={{ marginTop: "60px" }}>
                                        Inspiration
                                </p>
                                </Reveal>

                            </div>
                        </div>
                        <Reveal left delay={500}>
                            <p>My inspiration for web development evolved from working with an Arduino kit I bought for fun. At first the idea of me learning how to code using this toy like apparatus seemed inevitable. After a little self encouragement and going through the documentation and turtorial videos, I was hooked, turning lights on and off thinking i'm Humphry Davy. My love for developing software started to take off and I knew web development was my next profession.</p>
                        </Reveal>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-2">
                                <div style={{ width: "50px", height: "100px" }}>
                                    <Flask></Flask>
                                </div>
                            </div>
                            <div className="col-8">
                                <Reveal left>

                                    <p className="text-primary" style={{ marginTop: "60px" }}>
                                        Server & Database
                                </p>
                                </Reveal>
                            </div>
                        </div>
                        <Reveal left duration={1500}>

                            <p>Backend programming is my favorite part in Full Stack Web Development. I currently work with Node.js for sever-side development. I find it powerful and important to provide and secure information for a web application. I use Passport.js for authentication, and MongoDB and MySQL for database storage. </p>
                        </Reveal>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-2">
                                <div style={{ width: "50px", height: "100px" }}>
                                    <Flask></Flask>
                                </div>
                            </div>
                            <div className="col-8">
                                <Reveal left>

                                    <p className="text-primary" style={{ marginTop: "60px" }}>
                                        Current Project
                                </p>
                                </Reveal>
                            </div>
                        </div>
                        <Reveal left>
                            <p>I am creating a wedding website for my fiancee and I. If you look below in fun facts, the days are winding down fast so I need to hurry!  I am using the MERN stack to develop the website.  A npm-package I found to be useful is <a href="https://www.npmjs.com/package/react-confetti"><code className="bg-secondary text-white">react-confetti</code></a>. It allows you to create confetti with a few lines of a code. Stay in touch the website should be in my portfolio soon.</p>
                        </Reveal>
                    </div>
                </div>

                {/* Distorted Top */}
                <div className="" style={{ marginTop: "-1px" }}>
                    <ReactSVG src={backgroundPic} />
                </div>

                {/* Project Revolver */}
                {/* <div className="row revolver-parent">
                    <div className="col-12 text-center">
                        <h1 className="text-white mr-4">TOP 6</h1>
                        <div className={bulletGlide} id={none}>
                            <ProjectBullet bulletName={bulletName}></ProjectBullet>
                        </div>
                        <div id={spin} className="revolver-div" style={{ width: "300px", height: "300px", marginTop: "50px", marginBottom: "50px" }}>
                            <ProjectRevolver spinRevolver={spinRevolver} triviaRemove={triviaRemove} expenseRemove={expenseRemove}
                                projectRemove={projectRemove} lockRemove={lockRemove} squaresRemove={squaresRemove} dashboardRemove={dashboardRemove}></ProjectRevolver>
                        </div>
                    </div>
                </div> */}
                <h1>Portfolio</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Reveal up>
                            <div className="card text-center">
                                <div className="card-header">
                                    <h5 className="card-title">Project Vault</h5>
                                </div>
                                <div className="card-body">
                                    <img src={ProjectVaultPic} className="img-fluid shadow-lg" alt="Profile Img"></img>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                <div className="card-footer text-muted">
                                    2 days ago
                            </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-12 col-md-6">
                        <Reveal up>
                            <div className="card text-center">
                                <div className="card-header">
                                    <h5 className="card-title">Project Vault</h5>
                                </div>
                                <div className="card-body">
                                    <img src={ProjectVaultPic} className="img-fluid shadow-lg" alt="Profile Img"></img>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                <div className="card-footer text-muted">
                                    2 days ago
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