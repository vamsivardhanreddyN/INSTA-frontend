import React from "react"
import "./header.css"
const Header =()=>{
    const handleClick = event => {
        console.log(event.target);
        console.log('Image clicked');
    }
     return(
        <nav className="header-con">
        <section className="insta-logo">
        <img src={require("./logo/instaclone.png")} alt="insta logo" />
        </section>
        <section className="camera-logo">
        <a href="/formUser">
        <img src={require("./logo/camera.png")} alt="camera logo" onClick={handleClick}/>
        </a>
        </section>
        </nav>
    )
}
export default Header