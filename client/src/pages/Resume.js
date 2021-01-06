import React, { useEffect, useState } from "react";
import axios from "axios"
import PDF from "../images/Resume-Schwyn-Francis.pdf"
import "./Resume.css"

const Resume = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className=" wrap">
                            <iframe src={PDF}></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Resume;