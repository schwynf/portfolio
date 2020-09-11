import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div id="footer" >
            <div className="container row" id="footer-row">
                <div className="footer-content col-6">
                    <h5 id="footer-title">Team Fantasy</h5>
                    <p className="footer-content">Created by Phil Hurst & Schwyn Francis</p>
                </div>
                <div className="footer-content col-6">
                    <p className="footer-content">Team Fantasy is a completely free spread betting application where users bet against each other and not a casino house. We do NOT profit from any format of games from tournaments, head to head tables, or leagues.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;