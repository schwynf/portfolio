import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Navbar from "../../components/Navbar/Navbar"
import triviaPic from "../../images/Trivia-Pro.jpg"
import lockPic from "../../images/LOCKD.jpg"
import managerPic from "../../images/logo_spinner.png"
import budgetPic from "../../images/budget.png"
import videoPic from "../../images/video.gif"
import soonPic from "../../images/soon.jpeg"
import squaresPic from "../../images/squares.JPG"
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard"
import LazyLoad from 'react-lazyload';
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow"
import "./Portfolio.css"



let socket;

const Portfolio = () => {

    useEffect(() => {
        socket = socketIOClient();

        socket.on("activeUsersOnWebsite", (userCount)=>{
        })
        return () => {
            socket.disconnect()
        };
    }, []);
    const Loading = () => (
        <div>
    
            <h1>loading</h1>
        </div>
    )

    return (
        <>
            <div className="container text-warning">
                <Navbar></Navbar>
                <div className="row mt-4">
                    <div className="col-xl-12">
                        <div className="row mb-5 mt-4">
                            <div className="col-xl-5 mb-1">
                                <div className="card mx-auto float-xl-right shadow-lg" style={{ width: "18rem" }}>
                                        <PortfolioCard image={triviaPic} title="Trivia-Pro" text="Easy application to create, print, and execute quiz!" site="https://schwynf.github.io/Trivia-Pro/"></PortfolioCard>
                                   
                                </div>
                            </div>
                            <div className="col-xl-2"><cite>"WOW!"<br></br>~Scott<br></br><br></br><br></br>
                                <div className="text-right">
                                    "Perfect app for managing passwords!"<br></br>Quinn~
                             </div></cite>
                            </div>
                            <div className="col-xl-5">
                                <div className="card mx-auto float-xl-left shadow-lg" style={{ width: "18rem" }}>
                                    <PortfolioCard image={lockPic} title="LOCK'D" text="Password manager application for creating and storing!" site="https://universal-storage.herokuapp.com/"></PortfolioCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="row mb-5 mt-4">
                            <div className="col-xl-4 mb-1">
                                <div className="card mx-auto float-xl-right shadow-lg" style={{ width: "18rem" }}>
                                    <PortfolioCard image={managerPic} title="Project Vault" text="Manage your projects in one spot!" site="https://project-management-app-1.herokuapp.com/"></PortfolioCard>
                                </div>
                            </div>
                            <div className="col-xl-4"><cite>"Finally, I'm organized!"<br></br>~Kalee<br></br><br></br><br></br>
                                <div className="text-right">
                                    "I got my budget under control!"<br></br>Phil~
                             </div></cite>
                            </div>
                            <div className="col-xl-4">
                                <div className="card mx-auto float-xl-left shadow-lg" style={{ width: "18rem" }}>
                                    <PortfolioCard image={budgetPic} title="Expense Tracker" text="Keep your budget in check!" site="https://budget-data.herokuapp.com/"></PortfolioCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="row mb-5 mt-4">
                            <div className="col-xl-5 mb-1">
                                <div className="card mx-auto float-xl-right shadow-lg" style={{ width: "18rem" }}>
                                    <LazyLoad height={200} offset={100} placeholder={<Loading/>}> 
                                    <PortfolioCard image={videoPic} title="Dashboard Generator" text="CLI for creating an employee dashboard for any business!" site="https://github.com/schwynf/HW-TEAM-DASHBOARD-GENERATOR"></PortfolioCard>
                                    </LazyLoad>
                                </div>
                            </div>
                            <div className="col-xl-2"><cite>"quick and easy!"<br></br>~Justin<br></br><br></br><br></br>
                                <div className="text-right">
                                    "I don't mind creating squares anymore!"<br></br>Justin~
                             </div></cite>
                            </div>
                            <div className="col-xl-5">
                                <div className="card mx-auto float-xl-left shadow-lg" style={{ width: "18rem" }}>
                                    <PortfolioCard image={squaresPic} title="Super Bowl Squares" text="A quick way to setup squares with friends!" site="https://www.thesquaresgame.com"></PortfolioCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollArrow></ScrollArrow>
            </div>
            
        </>
    )
}

export default Portfolio;