import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePicture from "../component/HomePicture"
import HomeDescription from "../component/HomeDescription"
import ContactModal from "../component/ContactModal"
import EmailModal from "../component/EmailModal"

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
                <div className="text-light mt-3">Schwyn Francis</div>
                <div className="row text-light mt-2">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <HomePicture/>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <HomeDescription/>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
            <EmailModal/>
            <ContactModal/>
        </>
    )
}

export default Home;