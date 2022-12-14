
import React from "react";
import LandingPage from "./landingpage/landing-page";
import PostView from "./postview/postview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormUser from "./formuser/form";
import './App.css';
function App(){
    return(
        <>
          <BrowserRouter>
            <Routes>
                <Route path="" element={<LandingPage/>}/>
                <Route path="/postView" element={<PostView/>}/>
                <Route path="/formUser" element={<FormUser/>}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}
export default App;