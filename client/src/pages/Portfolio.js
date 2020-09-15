import React, { useEffect, useState } from "react";
import profilePic from "../images/profilePic.jpg"
import PortfolioCard from "../component/PorfolioCard"

const Portfolio = () => {

    return (
        <>
            <div className="container text-warning mt-4 mb-4">
                <div className="row pt-2">
                    <div className="col-sm-12">
                        <h1>Portfolio</h1>
                        <div><i className="fa fa-github" style={{ font: "36px", color: "white" }}></i><cite> View source code on my github page </cite><a href="https://github.com/schwynf?tab=repositories" target="_blank">https://github.com/schwynf?tab=repositories.</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="row mb-5 mt-4">
                            <div className="col-xl-5 mb-1">
                                <div className="card mx-auto float-xl-right shadow-lg" style={{ width: "18rem" }}>
                                    <PortfolioCard image={profilePic} title="Trivia-Pro" text="Easy application to create and execute quiz"></PortfolioCard>
                                </div>
                            </div>
                            <div class="col-xl-2"><cite>"WOW!"<br></br>~Kalee<br></br><br></br><br></br>
                                <div class="text-right">
                                    "Perfect app for managing passwords!"<br></br>Phil~
                             </div></cite>
                            </div>
                            <div className="col-xl-5">
                                <div className="card mx-auto float-xl-left shadow-lg" style={{ width: "18rem" }}>
                                <PortfolioCard image={profilePic} title="LOCK'D" text="Password manager application. Create an user and have fun!"></PortfolioCard>
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
                                <PortfolioCard image={profilePic} title="Project Manager" text="Manage your projects in one spot!"></PortfolioCard>
                                </div>
                            </div>
                            <div class="col-xl-4"><cite>"Finally I'm organized!"<br></br>~Kalee<br></br><br></br><br></br>
                                <div class="text-right">
                                    "I got my budget under control!"<br></br>Phil~
                             </div></cite>
                            </div>
                            <div className="col-xl-4">
                                <div className="card mx-auto float-xl-left shadow-lg" style={{ width: "18rem" }}>
                                <PortfolioCard image={profilePic} title="Expense Tracker" text="Keep your budget in check!"></PortfolioCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;