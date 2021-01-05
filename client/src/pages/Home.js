import React, { useEffect, useState } from "react";
import axios from "axios";
import { SocialIcon } from 'react-social-icons';
import Navbar from "../component/Navbar"
import profilePic from "../images/profilePic.jpg"
import HomePicture from "../component/HomePicture"
import HomeDescription from "../component/HomeDescription"
import ContactModal from "../component/ContactModal"
import EmailModal from "../component/EmailModal"
import "./Home.css"

const Home = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    return (
        <>
            <div className="container intro">
                <Navbar></Navbar>
                <div className="row" id="intro-content">
                    <div className="col-sm-6 intro-img text-center">
                        <img src={profilePic} className="img-thumbnail img-fluid shadow-lg rounded-circle intro-picture" alt="Profile Img"></img>
                    </div>
                    <div className="col-sm-6 intro-text pb-2">
                        <h5 className="text-secondary">Full Stack Web Developer</h5>
                        <h1>Schwyn Francis</h1>
                        <p id="pp">Experienced professional with a demonstrated history of client facing work and completing team projects. I'm a Junior Web Developer with a Bachelors of Science (B.S) in Biological Sciences. 2+ years of JavaScript experience. I recently earned a Full Stack Web Development certificate from the University of Arizona. Main focus is MERN stack for server side development.</p>
                        <div className="icons">
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                            <a href="" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email" /></a>
                            <a href="" data-toggle="modal" data-target="#exampleModal" ><SocialIcon bgColor="black" fgColor="white" network="" /></a>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 interest"><h3>What I Do</h3></div>
                </div>
                <div className="row text-white">
                    <div className="col-sm-4"><p className="text-primary">Inspiration to Web Dev</p><p>Experienced professional with a demonstrated history of client facing work and completing team projects. I work for Maricopa County Environmental Services in the Aquatic Health & Safety Department. I'm a Junior Web Developer with a Bachelors of Science (B.S) in Biological Sciences. 2+ years of JavaScript experience. I recently earned a Full Stack Web Development certificate from the University of Arizona. Main focus is MERN (MongoDB, Express, React, Node) stack for server side development.</p></div>
                    <div className="col-sm-4"><p className="text-primary">Node.js & Java </p><p>Experienced professional with a demonstrated history of client facing work and completing team projects. I work for Maricopa County Environmental Services in the Aquatic Health & Safety Department. I'm a Junior Web Developer with a Bachelors of Science (B.S) in Biological Sciences. 2+ years of JavaScript experience. I recently earned a Full Stack Web Development certificate from the University of Arizona. Main focus is MERN (MongoDB, Express, React, Node) stack for server side development.</p></div>
                    <div className="col-sm-4"><p className="text-primary">Current Project</p><p>Experienced professional with a demonstrated history of client facing work and completing team projects. I work for Maricopa County Environmental Services in the Aquatic Health & Safety Department. I'm a Junior Web Developer with a Bachelors of Science (B.S) in Biological Sciences. 2+ years of JavaScript experience. I recently earned a Full Stack Web Development certificate from the University of Arizona. Main focus is MERN (MongoDB, Express, React, Node) stack for server side development.</p></div>
                </div>
                <div className="row">
                    <div className="col-sm-12 interest"><h3>Fun Facts</h3></div>
                </div>
                <div className="row text-white text-center">
                    <div className="col-sm-3 ss ">
                        <div className="card bg-dark">
                            <div className="card-body text-primary">
                                Days Coding
                                <h2 className="text-white">365</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark">
                            <div className="card-body">
                                Wedding Countdown
                                <h2>365</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark">
                            <div className="card-body">
                                Days Coding
                                <h2>365</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ss">
                        <div className="card bg-dark">
                            <div className="card-body">
                                Birthday Countdown
                                <h2>365</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <EmailModal></EmailModal>
            </div>

        </>
    )
}

export default Home;