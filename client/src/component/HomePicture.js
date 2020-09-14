import React, { useEffect, useState } from "react";
import profilePic from "../images/profilePic.jpg"
import axios from "axios"

const HomePicture = () => {
    return (
        <>
            <div className="text-center">
                <img src={profilePic} style={{ width: "15rem" }} className="img-thumbnail img-fluid shadow-lg rounded-circle" alt="Profile Img"></img>
                <p>
                    <cite>"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it." <br></br>~Bill Gates</cite>
                </p>
            </div>
        </>
    )
}

export default HomePicture;