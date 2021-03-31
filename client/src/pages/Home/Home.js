//dependencies
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { SocialIcon } from 'react-social-icons';
import Zoom from 'react-reveal/Zoom';
import { ReactSVG } from 'react-svg';
import Reveal from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import LazyLoad from 'react-lazyload';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Jump from 'react-reveal/Jump';
//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import EmailModal from "../../components/EmailModal/EmailModal";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Counter from "../../components/Counter/Counter";
//images
import profilePic from "../../images/profilePic.jpg";
import ProjectVaultPic from "../../images/ProjectVault.JPG";
import Space from "../../images/space2.svg";
import SbSquares from "../../images/SbSquares.JPG";
import lockD from "../../images/LOCKD.jpg";
import TriviaPro from "../../images/TriviaPro.JPG";
import BudgetCalculator from "../../images/BudgetCalculator.JPG";
import videoPic from "../../images/video.gif";
//css
import "./Home.css";
import "./IntroArticle.css"


const Home = () => {
    const [counter, setCounter] = useState({
        birthday: 0,
        wedding: 0,
        coding: 0,
        acitveUsers: 0
    });
    const [downArrow, setDownArrow] = useState("")
    const [downArrowMobile, setDownArrowMobile] = useState("fa fa-angle-double-down")

    useEffect(() => {
        if (window.innerWidth > 500) {
            setDownArrow("fa fa-angle-double-down");
            setDownArrowMobile("");
        }

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
                activeUsers: activeUsersData
            });
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    const pdf = async () => {
        window.location.href = "/pdf";
    }

    const scrollMore = () => {
        scroll.scrollMore(850)
    }
    const scrollMoreMobile = () => {
        scroll.scrollMore(800)
    }

    const checkWidthName = () => {
        if (window.innerWidth < 500) {
            console.log("ssssssssssssssssss")
            return (
                <>
                    <Reveal left>
                        <div style={{ height: "4px", backgroundColor: "white", marginTop: "110px" }} ></div>
                        <h1 className="text-center text-white mt-5 mb-5 text-danger" id="portfolio-div" style={{ fontFamily: "Train One , cursive" }}>About</h1>
                    </Reveal>

                </>
            )
        }
    }

    const checkWidth = () => {
        if (window.innerWidth > 500) {

            return (
                <>
                    <article className="row text-white">
                        <section className="col-12 col-lg-4">
                            <Reveal down duration={2000}>
                                <PortfolioCard title="Project Vault" content="Project management software. With Project Vault, users can manage tasks and projects in the office or on the go." picture={ProjectVaultPic} tech="TECH: React, Auth0, Passport.js, MongoDB..." link="https://project-management-app-1.herokuapp.com/" class="img-fluid shadow-lg mt-4">
                                </PortfolioCard>
                            </Reveal>
                        </section>
                        <section className="col-12 col-lg-4">
                            <Reveal down duration={2000}>
                                <PortfolioCard title="Squares" content="Stop using paper to setup squares! This application comes with google login and live chat to allow quick interaction." picture={SbSquares} tech="TECH: React, Redux, OAuth, Passport.js, Socket.io, MongoDB..." link="https://www.thesquaresgame.com" class="img-fluid shadow-lg mt-4">
                                </PortfolioCard>
                            </Reveal>
                        </section>
                        <section className="col-12 col-lg-4">
                            <Reveal down duration={2000}>
                                <PortfolioCard title="Lock'D" content="Password management software. With Lock'D, users can manage login information safely and verify if password or email has been compromised." picture={lockD} tech="TECH: Handlebars, CryptoJS, BcryptJS, Passport.js, MySQL..." link="https://universal-storage.herokuapp.com/" class="img-fluid shadow-lg">
                                </PortfolioCard>
                            </Reveal>
                        </section>
                    </article>
                    <article className="row text-white mt-2">
                        <section className="col-12 col-lg-4">
                            <Reveal left>
                                <PortfolioCard title="Trivia-Pro" content="Easy application to create, print, and execute quizzes! Open Trivia Database API used for quick question generator. Great for learning and fun!" picture={TriviaPro} tech="TECH: JQuery, Choreographer.js, Local Storage, Materialize CSS..." link="https://schwynf.github.io/Trivia-Pro/" class="img-fluid shadow-lg">
                                </PortfolioCard>
                            </Reveal>
                        </section>
                        <section className="col-12 col-lg-4">
                            <Reveal up>
                                <PortfolioCard title="Budget Calculator" content="Having trouble keeping track of your budget? I got the perfect calculator with graphic visual that can solve your problem." picture={BudgetCalculator} tech="TECH: JQuery, Chart.js, MongoDB, IndexedDB, Service Worker" link="https://budget-data.herokuapp.com/" class="img-fluid shadow-lg mt-4">
                                </PortfolioCard>
                            </Reveal>
                        </section>
                        <section className="col-12 col-lg-4">
                            <Reveal right>
                                <PortfolioCard title="Employee Dashboard" content="This is a command line interface application that generates an employee dashboard depending on user input." picture={videoPic} tech="TECH: Node.js, Jest, RegExp, Bootstrap CSS..." link="https://github.com/schwynf/HW-TEAM-DASHBOARD-GENERATOR" class="img-fluid shadow-lg mt-4">
                                </PortfolioCard>
                            </Reveal>
                        </section>
                    </article>
                </>
            )
        }
        return (
            <>
                <article className="row text-white">
                    <section className="col-12 col-lg-4">
                        <Reveal up opposite>
                            <PortfolioCard title="Project Vault" content="Project management software. With Project Vault, users can manage tasks and projects in the office or on the go." picture={ProjectVaultPic} tech="TECH: React, Auth0, Passport.js, MongoDB..." link="https://project-management-app-1.herokuapp.com/" class="img-fluid shadow-lg mt-4">
                            </PortfolioCard>
                        </Reveal>
                    </section>
                    <section className="col-12 col-lg-4">
                        <Reveal up opposite>
                            <PortfolioCard title="Squares" content="Stop using paper to setup squares! This application comes with google login and live chat to allow quick interaction." picture={SbSquares} tech="TECH: React, Redux, OAuth, Passport.js, Socket.io, MongoDB..." link="https://www.thesquaresgame.com" class="img-fluid shadow-lg mt-4">
                            </PortfolioCard>
                        </Reveal>
                    </section>
                    <section className="col-12 col-lg-4">
                        <Reveal up opposite>
                            <PortfolioCard title="Lock'D" content="Password management software. With Lock'D, users can manage login information safely and verify if password or email has been compromised." picture={lockD} tech="TECH: Handlebars, CryptoJS, BcryptJS, Passport.js, MySQL..." link="https://universal-storage.herokuapp.com/" class="img-fluid shadow-lg">
                            </PortfolioCard>
                        </Reveal>
                    </section>
                </article>
                <article className="row text-white mt-2">
                    <section className="col-12 col-lg-4">
                        <Reveal up opposite>
                            <PortfolioCard title="Trivia-Pro" content="Easy application to create, print, and execute quizzes! Open Trivia Database API used for quick question generator. Great for learning and fun!" picture={TriviaPro} tech="TECH: JQuery, Choreographer.js, Local Storage, Materialize CSS..." link="https://schwynf.github.io/Trivia-Pro/" class="img-fluid shadow-lg">
                            </PortfolioCard>
                        </Reveal>
                    </section>
                    <section className="col-12 col-lg-4">
                        <Reveal up opposite>
                            <PortfolioCard title="Budget Calculator" content="Having trouble keeping track of your budget? I got the perfect calculator with graphic visual that can solve your problem." picture={BudgetCalculator} tech="TECH: JQuery, Chart.js, MongoDB, IndexedDB, Service Worker" link="https://budget-data.herokuapp.com/" class="img-fluid shadow-lg mt-4">
                            </PortfolioCard>
                        </Reveal>
                    </section>
                    <section className="col-12 col-lg-4">
                        <Reveal up opposite>
                            <PortfolioCard title="Employee Dashboard" content="This is a command line interface application that generates an employee dashboard depending on user input." picture={videoPic} tech="TECH: Node.js, Jest, RegExp, Bootstrap CSS..." link="https://github.com/schwynf/HW-TEAM-DASHBOARD-GENERATOR" class="img-fluid shadow-lg mt-4">
                            </PortfolioCard>
                        </Reveal>
                    </section>
                </article>
            </>
        )

    }

    return (
        <>
            <main className="container">
                <Navbar></Navbar>
                {/* intro */}
                <article className="row" id="intro-article">
                    <aside className="col-sm-6 col-md-6 col-xl-4 text-center">
                        <img src={profilePic} id="portfolio-image" className="img-fluid shadow-lg rounded-circle" alt="Profile Img"></img>
                        <div id="space-svg-parent">
                            <ReactSVG src={Space} />
                        </div>
                    </aside>
                    <section className="col-sm-6 col-md-6 col-xl-8 intro-section-summary pb-2">
                        <h5 id="full-stack" className="text-warning">Full Stack Web Developer</h5>

                        <h1 id="intro-section-summary-name">Schwyn Francis</h1>
                        <Jump forever duration={2000}>
                            <div className={downArrowMobile} style={{ fontSize: "90px", marginLeft: "0px" }} onClick={scrollMoreMobile}></div>
                        </Jump>
                        {checkWidthName()}
                        <p id="intro-section-summary-paragraph">Experienced professional with a demonstrated history of client facing work and completing team projects. 2+ years of JavaScript experience. On top of my Bachelors Degree,  I recently earned a Full Stack Web Development certificate from the University of Arizona. I am ready to transform your ingenious business idea into reality!</p>
                        <div className="intro-section-summary-icons">
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                            <div style={{ display: "inline-block" }} data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email" /></div>
                            <div onClick={pdf} style={{ display: "inline-block" }}><SocialIcon bgColor="black" fgColor="white" network="" /></div>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />

                        </div>
                        <Jump forever duration={2000}>
                            <div className={downArrowMobile} style={{ fontSize: "90px", marginLeft: "0px" }} onClick={scrollMoreMobile}></div>
                        </Jump>
                        <Jump forever duration={2000}>
                            <div className={downArrow} style={{ fontSize: "90px", marginLeft: "150px" }} onMouseEnter={scrollMore}></div>
                        </Jump>
                    </section>
                </article>
                {/* White Divider */}
                <Reveal left>

                    <div style={{ height: "4px", backgroundColor: "white", marginTop: "110px" }} ></div>
                </Reveal>
                {/* Portfolio */}
                <Reveal left>
                    <h1 className="text-center text-white mt-5 mb-5 text-danger" id="portfolio-div" style={{ fontFamily: "Train One , cursive" }}>Portfolio</h1>
                </Reveal>
                {/* check for up or down */}
                {checkWidth()}

                <Reveal left>

                    <div style={{ height: "4px", backgroundColor: "white", marginTop: "110px" }} ></div>
                </Reveal>

                <Reveal left>
                    <h1 className="text-center text-white mt-5 mb-5 text-danger" id="portfolio-div" style={{ fontFamily: "Train One , cursive" }}>Contact</h1>
                </Reveal>
                <Reveal up>
                    <article className="row justify-content-center mb-5">
                        <section className="col-8 justify-content-center">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" id="name" name="name" className="form-control w-90 text-white" style={{ backgroundColor: "black" }}></input>
                                    <label for="name" className="text-white">Name</label>

                                </div>
                                <div className="col-6">
                                    <input type="text" id="email" name="email" className="form-control w-90 text-white" style={{ backgroundColor: "black" }}></input>
                                    <label for="email" className="text-white">Email</label>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" id="subject" name="subject" className="form-control text-white" style={{ backgroundColor: "black" }}></input>
                                    <label for="subject" className="text-white">Subject</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" id="subject" name="message" class="form-control text-white" style={{ backgroundColor: "black" }}></input>
                                    <label for="subject" className="text-white">Message</label>
                                </div>
                            </div>
                        </section>
                        <section className="col-12 col-lg-4">
                            <li className="form-icons">
                                <i class="fa fa-globe" style={{ color: "white" }}></i>
                                <p className="text-white">Scottsdale, AZ 85257, USA</p>
                            </li>
                            <li className="form-icons">
                                <i class="fa fa-mobile-phone" style={{ color: "white" }}></i>
                                <p className="text-white">+01 630-903-9996</p>
                            </li>
                            <li className="form-icons">
                                <i class="	fa fa-send-o" style={{ color: "white" }}></i>
                                <p className="text-white">schwynf@gmail.com</p>
                            </li>
                        </section>
                        <button type="button" className="btn btn-danger float-left">Send</button>
                    </article>
                </Reveal>

                {/* Fun Facts */}
                <article className="row text-white text-center mt-5">
                    <aside className="col-sm-3 ss">
                        <Counter title=" Days Coding" counter={counter.coding}></Counter>
                    </aside>
                    <aside className="col-sm-3 ss">
                        <Counter title="Wedding Countdown" counter={counter.wedding}></Counter>
                    </aside>
                    <aside className="col-sm-3 ss">
                        <Counter title="Active Users On Website" counter={counter.activeUsers}></Counter>
                    </aside>
                    <aside className="col-sm-3 ss">
                        <Counter title="Birthday Countdown" counter={counter.birthday}></Counter>
                    </aside>
                </article>
                <Footer></Footer>
                {/* Email Modal */}
                <EmailModal></EmailModal>
            </main>
        </>
    )
}

export default Home;