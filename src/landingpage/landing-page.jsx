import React from "react"

const LandingPage =()=>{
    return(
        <>
            <div id="main-container">
                <div id="left-content">
                    <img src={require("./images/cameraforlanding.jpg")}/>
                </div>
                <div id="right-content">
                    <h1>10x Team 04</h1>
                    <a href="/PostView">Enter</a>
                </div>
            </div>
        </>
    )
}
export  default LandingPage