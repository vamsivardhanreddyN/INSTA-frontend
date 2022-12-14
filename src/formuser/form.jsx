import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Header from "../header/header";

const FormUser = () => {
    const [post, setPost] = useState({});
    const navigator = useNavigate()

    const postData = async (e) => {

        e.preventDefault();
        console.log(post)
        const formData = new FormData()
        formData.append("image", post.image)
        formData.append("name", post.name)
        formData.append("location", post.location)
        formData.append("description", post.description)
        const config = {
            header: { "content-type": "multipart/form-user" },
        }
        await axios.post("http://localhost:5000/add", formData, config)
            .then((res) => {
                console.log("post", res)
            }).catch((err) => console.log(err))

        navigator("/postView")
    }


    return (
        <>
            <div id="form-data">
                <Header/>
                <form method="post" onSubmit={postData}>
                    <input type="file" onChange={(e) => setPost({ ...post, image: e.target.files[0] })} name="image" />
                    <input type="text" onChange={(e) => setPost({ ...post, name: e.target.value })} placeholder="name" name="name" />
                    <input type="text" onChange={(e) => setPost({ ...post, location: e.target.value })} placeholder="location" name="location" />
                    <input type="text" onChange={(e) => setPost({ ...post, discription: e.target.value })} placeholder="discription" name="discription" />
                    <button id="post-submit" type="submit">submit</button>

                </form>

            </div>
        </>
    )
}
export default FormUser;