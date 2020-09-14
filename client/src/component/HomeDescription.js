import React, { useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons';

const HomeDescription = () => {
    return (
        <>
            <div className="text-center" style={{ backgroundColor: "grey", height: "14rem" }}>
                Full Stack Web Developer <br></br>
                        ......................................
                <br></br>
                Node.js | Express.js | React.js | MongoDB | MySQL {''}
                <br></br>
                <br></br>
                <div>
                    <a className="text-warning" href="/portfolio">༼ つ ◕_◕ ༽つPORTFOLIO----------------------{'>'}</a>
                </div>
                <br></br>
                <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://github.com/schwynf" />
                <a href="" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><SocialIcon bgColor="black" fgColor="white" network="email" /></a>
                <a href="" data-toggle="modal" data-target="#exampleModal" ><SocialIcon bgColor="black" fgColor="white" network="" /></a>
                <SocialIcon bgColor="black" fgColor="white" target="_blank" url="https://www.linkedin.com/in/schwyn-francis-5a47a9199/" />
                <br></br>
            </div>
        </>
    )
}

export default HomeDescription;