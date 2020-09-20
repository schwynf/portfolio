import React, { useEffect, useState } from "react";
import axios from "axios"

const EmailModal = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(email + name + message)
        if (email && name && message) {
            axios.post("/email", { email: email, name: name, message: message }).then(({data}) => {
                console.log(data);
                setEmail("");
                setName("");
                setMessage("");
            }).catch((error) => { console.log(error) })
        }
    };

    return (
        <>
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
                                    <input onChange={event => setName(event.target.value)} value={name} type="text" className="form-control" id="recipient-name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-email" className="col-form-label">Email:</label>
                                    <input onChange={event => setEmail(event.target.value)} value={email} type="text" className="form-control" id="recipient-email"></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" className="col-form-label">Message:</label>
                                    <textarea onChange={event => setMessage(event.target.value)} value={message} className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button disabled={!(email && name && message)} onClick={handleFormSubmit} type="button" className="btn btn-primary" data-dismiss="modal">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailModal;