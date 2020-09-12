import React, { useEffect, useState } from "react";
import axios from "axios"
import profilePic from "../images/profilePic.jpg"

const Portfolio = () => {

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
                                    <img src={profilePic} style={{ height: "18rem" }} className="card-img-top img-thumbnail img-fluid" alt="Bubble Sort"></img>
                                    <div className="card-body text-dark">
                                        <h5 className="card-title">Bubble Sort</h5>
                                        <p className="card-text">A visual tool to help comprehend the bubble sort algorithm.</p>
                                        <a href="./bubble_sort.html" target="_blank" className="btn btn-primary">Try it out!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2"><cite>"Bubbles sort was amazing"<br></br>~Kalee<br></br><br></br><br></br>
                                <div class="text-right">
                                    "Computer Cheats!"<br></br>Phil~
                             </div></cite>
                            </div>
                            <div className="col-xl-5">
                                <div className="card mx-auto float-xl-left shadow-lg" style={{ width: "18rem" }}>
                                    <img src={profilePic} style={{ height: "18rem" }} className="card-img-top img-thumbnail img-fluid" alt="Bubble Sort"></img>
                                    <div className="card-body text-dark">
                                        <h5 className="card-title">Bubble Sort</h5>
                                        <p className="card-text">A visual tool to help comprehend the bubble sort algorithm.</p>
                                        <a href="./bubble_sort.html" target="_blank" className="btn btn-primary">Try it out!</a>
                                    </div>
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
                                    <img src={profilePic} style={{ height: "18rem" }} className="card-img-top img-thumbnail img-fluid" alt="Bubble Sort"></img>
                                    <div className="card-body text-dark">
                                        <h5 className="card-title">Bubble Sort</h5>
                                        <p className="card-text">A visual tool to help comprehend the bubble sort algorithm.</p>
                                        <a href="./bubble_sort.html" target="_blank" className="btn btn-primary">Try it out!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4"><cite>"Bubbles sort was amazing"<br></br>~Kalee<br></br><br></br><br></br>
                                <div class="text-right">
                                    "Computer Cheats!"<br></br>Phil~
                             </div></cite>
                            </div>
                            <div className="col-xl-4">
                                <div className="card mx-auto float-xl-left shadow-lg" style={{ width: "18rem" }}>
                                    <img src={profilePic} style={{ height: "18rem" }} className="card-img-top img-thumbnail img-fluid" alt="Bubble Sort"></img>
                                    <div className="card-body text-dark">
                                        <h5 className="card-title">Bubble Sort</h5>
                                        <p className="card-text">A visual tool to help comprehend the bubble sort algorithm.</p>
                                        <a href="./bubble_sort.html" target="_blank" className="btn btn-primary">Try it out!</a>
                                    </div>
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