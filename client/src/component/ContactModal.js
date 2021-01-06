import React, { useEffect, useState } from "react";
import axios from "axios"
import PDF from "../images/Resume-Schwyn-Francis.pdf"
import "./ContactModal.css"

const ContactModal = () => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center" id="exampleModalLabel">Resume</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* <div className="modal-body">
                         Email: schwynf@gmail.com <br></br>
                         Phone: (630)-903-9996
                        </div> */}
                        <embed src={PDF} style={{height:"75vh"}}></embed>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactModal;