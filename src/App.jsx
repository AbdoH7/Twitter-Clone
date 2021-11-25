import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Contexts/userContext";
import "./App.css";
import UserProfile from "./components/user-profile";
import SideNavbar from "./components/SideNavbar";
import TweetBlock from "./components/tweet-block";


function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <UserProvider>
          <div style={{width:"450px"}}> <SideNavbar  /> </div>
           
          <Routes>
            <Route path="/profile" element={<UserProfile/>}/>
            <Route path="/profile/tweetblock" element={<TweetBlock/>}/>
              
          </Routes>
          <rightside style={{zIndex:"9", width:"650px"}}>
          </rightside>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
