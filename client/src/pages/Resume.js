import React, { useEffect, useState } from "react";
import axios from "axios"
import PDF from "../images/Resume-Schwyn-Francis.pdf"

const Resume = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div style={{ height: "2000px" }} className="text-center">
                            <iframe src={PDF} style={{ width: "100%", height: "100%", border: '0px', allow: "fullscreen" }}></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Resume;