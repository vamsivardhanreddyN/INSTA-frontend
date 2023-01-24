import React from "react";
import Header from "../header/header";
import "./postview.css"
import axios from "axios";
import { useState, useEffect } from "react";

const PostView = () => {

    const [posts, setpost] = useState([])

    useEffect(() => {
        axios.get("https://prussian-blue-antelope-tam.cyclic.app/add")
            .then((res) => {
                setpost(res.data.profile)
            })
    }, [])
console.log(posts)
    return (
        <div id="insta-container">
        <Header />
        {posts.map((post ,index) => {
            return (
                <>
                <div id="post-card">
                    <h1>{post.name}</h1>
                    {/* <a href=""><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a> */}
                    <h2>{post.location}</h2>
                    <img src={post.image} alt="lo"/>
                    <div id="like-box">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-h fa-3x" aria-hidden="true"></i>
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>
                    <div id="desciption" >{post.description}</div>
                </div>

            </>)
        })}
    </div>
    )

}
export default PostView;
