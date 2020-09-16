import React, { useEffect, useState } from "react";
import profilePic from "../images/profilePic.jpg"
import triviaPic from "../images/Trivia-Pro.jpg"
import lockPic from "../images/LOCKD.jpg"
import managerPic from "../images/logo_spinner.png"
import budgetPic from "../images/budget.png"
import PortfolioCard from "../component/PorfolioCard"

const Portfolio = () => {

    return (
        <>
            <div className="container text-warning mt-4 mb-4">
                <div className="row pt-2">
                    <div style={{width: "100%"}}>

                    <a className="text-warning float-right" href="/">{'<'}----Back</a>
                    </div>
                    
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
                                    <PortfolioCard image={triviaPic} title="Trivia-Pro" text="Easy application to create, print, and execute quiz!" site="https://schwynf.github.io/Trivia-Pro/"></PortfolioCard>
                                </div>
                            </div>
                            <div class="col-xl-2"><cite>"WOW!"<br></br>~Scott<br></br><br></br><br></br>
                                <div class="text-right">
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
                            <div class="col-xl-4"><cite>"Finally, I'm organized!"<br></br>~Kalee<br></br><br></br><br></br>
                                <div class="text-right">
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
            </div>
        </>
    )
}

export default Portfolio;