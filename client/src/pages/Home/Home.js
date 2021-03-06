//dependencies
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { SocialIcon } from 'react-social-icons';
import Zoom from 'react-reveal/Zoom';
import { ReactSVG } from 'react-svg';
//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import EmailModal from "../../components/EmailModal/EmailModal";
import ProjectRevolver from "../../components/ProjectRevolver/ProjectRevolver";
//images
import profilePic from "../../images/profilePic.jpg";
import backgroundPic from "../../images/distortBottom.svg";
import revolverPic from "../../images/revolver.svg";
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
    const [none, setNone] = useState("")

    useEffect(() => {
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

    const spinRevolver = ()=> {
        setSpin("revolver")
        setTimeout(()=>{
            setNone("none")
        },10000)
    }

    return (
        <>
            <div className="container">
                <Navbar></Navbar>
                <div className="justify-content-center text-center">
                </div>
                {/* intro */}
                <div className="row" id="intro-content">
                    <div className="col-sm-6 col-md-12 col-xl-6 intro-img text-center">
                        <img src={profilePic} className="img-thumbnail img-fluid shadow-lg rounded-circle intro-picture" alt="Profile Img"></img>
                    </div>
                    <div className="col-sm-6 col-md-12 col-xl-6 intro-text pb-2">
                        <h5 className="text-secondary">Full Stack Web Developer</h5>
                        <h1>Schwyn Francis</h1>
                        <p id="pp">Experienced professional with a demonstrated history of client facing work and completing team projects. 2+ years of JavaScript experience. On top of my Bachelors Degree,  I recently earned a Full Stack Web Development certificate from the University of Arizona. I am currently focused on utilizing my web development skills to help a business grow. Main focus is MERN stack (MongoDB, Express.js, React.js, Node.js). Always willing to learn and improve.</p>
                        <div className="icons">
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                            <div style={{ display: "inline-block" }} data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email" /></div>
                            <div onClick={pdf} style={{ display: "inline-block" }}><SocialIcon bgColor="black" fgColor="white" network="" /></div>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />
                        </div>
                    </div>
                </div>
                {/* What I Do */}
                {/* <div style={{ backgroundColor: "white", height: "1px" }}></div> */}
                <div className="row text-dark bg-white pr-2 pl-2 mt-3 pt-5" style={{width:"99.99%",marginLeft:"0.2px"}}>
                    <div className="col-sm-4"><p className="text-primary">Inspiration to Web Dev</p><p>My inspiration for web development came from working with an Arduino kit I bought for fun. At first the idea of me learning how to code using this toy like apparatus seemed inevitable. After +8 hrs going through the documentation and turtorial videos, I was hooked. I was turning lights on and off thinking i'm Humphry Davy. My love for developing software started to take off and I knew web dev was my next profession.</p></div>
                    <div className="col-sm-4"><p className="text-primary">Server & Database </p><p>Backend programming is my favorite part in Full Stack Web Development. I currently work with Node.js and C# for sever-side development. I find it powerful and important to provide and secure information for a web application. I use Passport.js for authentication, and MongoDB and MySQL for database storage. </p></div>
                    <div className="col-sm-4"><p className="text-primary">Current Project</p><p>I am currently creating a wedding website for my fiancee and I. If you look below in fun facts, the days are winding down fast so I need to hurry!  I am using the MERN stack to create the website.  A npm-package I found to be useful is <a href="https://www.npmjs.com/package/react-confetti"><code className="bg-secondary text-white">react-confetti</code></a>. It allows you to create confetti with a few lines of a code. Stay in touch the website should be in my portfolio soon.</p>
                    </div>
                    
                </div>
                <div className="distortTop" style={{marginTop:"-1px"}}>

                    <ReactSVG src={backgroundPic} />
                </div>

                
                
                {/* <div className="mb-3" style={{ backgroundColor: "white", height: "1px" }}></div> */}
                <div className="row">
                    <div className="col-12">
                        <div id={spin} className="revolver-div" style={{ width: "300px", height: "300px",  marginTop: "50px", marginBottom: "50px" }}>
                            <ProjectRevolver spinRevolver={spinRevolver} none={none}></ProjectRevolver>
                            {/* <ReactSVG src={revolverPic} id="revolver" /> */}
                        </div>
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