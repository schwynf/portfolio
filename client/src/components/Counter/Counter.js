//dependencies
import React, { useEffect, useState } from "react";
import Zoom from 'react-reveal/Zoom';

//css
import "./Counter.css";

const Counter = (props) => {
    return (
        <>
            <div className="card bg-dark" style={{ height: "100%",width: "100%",borderRadius:"50%" }}>
                <div className="card-body text-primary">
                        {props.title}
                    <Zoom duration={1000}>
                        <h2 className="text-white">{props.counter}</h2>
                    </Zoom>
                </div>
            </div>

        </>
    )
}

export default Counter;