//dependencies
import React, { useEffect, useState } from "react";
//css
import "./ProjectBullet.css";

const ProjectBullet = (props) => {

    useEffect(() => {

        return () => {
        }
    }, []);


    return (
        <>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="131px" height="47px" viewBox="0 0 131 47">
                <path className="bp0" d="M97,6v0.02C96.58,6,96.17,6,95.75,6H97z" />
                <path className="bp0" d="M97,40.98V41h-1.25C96.17,41,96.58,41,97,40.98z" />
                <path className="bp1" d="M97,6.02v34.96C96.58,41,96.17,41,95.75,41H6V6h89.75C96.17,6,96.58,6,97,6.02z" />
                <path className="bp2" d="M126,23.5c0,9.42-12.87,17.11-29,17.48V6.02C113.13,6.39,126,14.08,126,23.5z" />
                <text transform="matrix(1 0 0 1 15 26.0078)">{props.bulletName}</text>
            </svg>
        </>
    )
}

export default ProjectBullet;