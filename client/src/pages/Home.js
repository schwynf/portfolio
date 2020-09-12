import React, { useEffect, useState } from "react";
import axios from "axios";
import profilePic from "../images/profilePic.jpg"
import { SocialIcon } from 'react-social-icons';

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
            <div className="container">
                <div className="text-light mt-5">Schwyn Francis</div>
                <div className="row text-light">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="text-center">
                            <img src={profilePic} style={{ width: "15rem" }} className="img-thumbnail img-fluid shadow-lg rounded-circle" alt="Profile Img"></img>
                            <p>
                                <cite>"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it." <br></br>~Bill Gates</cite>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="text-center" style={{ backgroundColor: "grey", height: "14rem" }}>
                            Full Stack Web Developer <br></br>
                        ......................................
                        <br></br>
                        Node.js | Express.js | React.js | MongoDB | MySQL {''}
                            <br></br>
                            <br></br>
                            <div>
                                <a className="text-danger" href="/portfolio">༼ つ ◕_◕ ༽つPORTFOLIO----------------------></a>
                            </div>
                            <br></br>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                            <a href="" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email" /></a>
                            <a href="" data-toggle="modal" data-target="#exampleModal" ><SocialIcon bgColor="black" fgColor="white" network="" /></a>
                            <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />
                            <br></br>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>



            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Personal Contact Info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                         Email: schwynf@gmail.com <br></br>
                         Phone: (630)-903-9996
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Hi! Send a quick message and I will respond soon.</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Name:</label>
                                    <input type="text" className="form-control" id="recipient-name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Email:</label>
                                    <input type="text" className="form-control" id="recipient-email"></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;