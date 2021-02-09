import React, { useEffect, useState } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import { SocialIcon } from 'react-social-icons';
import Navbar from "../component/Navbar"
import profilePic from "../images/profilePic.jpg"
import ContactModal from "../component/ContactModal"
import EmailModal from "../component/EmailModal"
import Zoom from 'react-reveal/Zoom';
import "./Home.css"

let socket;

const Home = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState(0);
    const [wedding, setWedding] = useState(0);
    const [coding, setCoding] = useState(0);
    const [acitveUsers, setActiveUsers] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(email + password)
        if (email && password) {
            axios.post("/login", { email: email, password: password }).then(({ data }) => {
                console.log(data)
                if (data.user) {
                    window.location.href = "/"
                }
            }).catch((error) => { console.log(error) })
        }
    };

    useEffect(() => {
        //Bday countdown
        var bDay = new Date("sept 4, 2021");
        bDay = bDay.getTime();
        bDay = bDay / 1000 / 60 / 60 / 24
        var today = new Date();
        today = today.getTime();
        today = today / 1000 / 60 / 60 / 24
        setBirthday(Math.floor(bDay - today));
        //Wedding countdown
        var wDay = new Date("oct 9, 2021");
        wDay = wDay.getTime();
        wDay = wDay / 1000 / 60 / 60 / 24
        var today = new Date();
        today = today.getTime();
        today = today / 1000 / 60 / 60 / 24
        setWedding(Math.floor(wDay - today));
        //Coding counter
        var cDay = new Date("jan 7, 2019");
        cDay = cDay.getTime();
        cDay = cDay / 1000 / 60 / 60 / 24
        var today = new Date();
        today = today.getTime();
        today = today / 1000 / 60 / 60 / 24
        setCoding(Math.floor(today - cDay));

        socket = socketIOClient();
        socket.on('activeUsersOnWebsite', async (activeUserData) => {
            setActiveUsers(activeUserData);
        });

        return () => {
            socket.disconnect();
        };
    }, []);


    const pdf = async () => {
        window.location.href = "/pdf"
    }



    return (
        <>
            <div className="container intro">
                <Navbar></Navbar>
                {/* intro */}
                <div className="row" id="intro-content">
                    <div className="col-sm-6 intro-img text-center">
                        <img src={profilePic} className="img-thumbnail img-fluid shadow-lg rounded-circle intro-picture" alt="Profile Img"></img>
                    </div>
                    <div className="col-sm-6 intro-text pb-2">
                        <h5 className="text-secondary">Full Stack Web Developer</h5>
                        <h1>Schwyn Francis</h1>
                        <p id="pp">Experienced professional with a demonstrated history of client facing work and completing team projects. I'm a Junior Web Developer with a Bachelors of Science (B.S) in Biological Sciences. 2+ years of JavaScript experience. I recently earned a Full Stack Web Development certificate from the University of Arizona. Main focus is MERN stack.</p>
                        <div className="icons">
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                            <a href="" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email"/></a>
                            <a href="/pdf" target="_blank"><SocialIcon bgColor="black" fgColor="white" network=""/></a>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />
                        </div>
                    </div>
                </div>
                {/* What I Do */}
                <div className="row">
                    <div className="col-sm-12 interest"><h3>What I Do</h3></div>
                </div>
                <div className="row text-white">
                    <div className="col-sm-4"><p className="text-primary">Inspiration to Web Dev</p><p>My inspiration for web development came from working with an Arduino kit I bought for fun. At first the idea of me learning how to code using this toy like apparatus seemed inevitable. After +8 hrs going through the documentation and turtorial videos, I was hooked. I was turning lights on and off thinking i'm Humphry Davy. My love for developing software started to take off and I knew web dev was my next profession.</p></div>
                    <div className="col-sm-4"><p className="text-primary">Server & Database </p><p>Backend programming is my favorite part in Full Stack Web Development. I currently work with Node.js and Java for sever-side development. I find it powerful and important to provide and secure information for a web application. I use Passport.js for authentication, and MongoDB and MySQL for database storage. </p></div>
                    <div className="col-sm-4"><p className="text-primary">Current Project</p><p>I am currently creating a wedding website for my fiancee and I. If you look below in fun facts, the days are winding down fast so I need to hurry!  I am using the MERN stack to create the website.  A npm-package I found to be useful is <a href="https://www.npmjs.com/package/react-confetti"><code className="bg-secondary text-white">react-confetti</code></a>. It allows you to create confetti with a few lines of a code. Stay in touch the website should be in my portfolio soon.</p></div>
                </div>
                {/* Fun Facts */}
                <div className="row">
                    <div className="col-sm-12 interest"><h3>Fun Facts</h3></div>
                </div>
                <div className="row text-white text-center">
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">

                                Days Coding
                                <Zoom duration={1000}>

                                    <h2 className="text-white">{coding}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">
                                Wedding Countdown
                                <Zoom duration={2000}>

                                    <h2 className="text-white">{wedding}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">
                                Active Users On Website
                                <Zoom duration={3000}>

                                    <h2 className="text-white">{acitveUsers}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark" style={{ height: "100%" }}>
                            <div className="card-body text-primary">
                                Birthday Countdown
                                <Zoom duration={4000}>

                                    <h2 className="text-white">{birthday}</h2>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Email Modal */}
                <EmailModal></EmailModal>
                <ContactModal></ContactModal>

            </div>

        </>
    )
}

export default Home;