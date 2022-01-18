import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./Contexts/userContext";
import "./App.css";
import UserProfile from "./components/user-profile";
import SideNavbar from "./components/SideNavbar";
import TweetBlock from "./components/tweet-block";
import Followers from "./components/followers";
import Following from "./components/following";
import ExpandedTweet from "./components/ExpandedTweet/expandedTweet";
//import SignInUp from "./components/signInUp";
//import NewloginPage from "./components/NewloginPage";
import { getAuth } from 'firebase/auth';
import Home from "./components/home";

function App(props) {


  return (
    <BrowserRouter>
      <div className="App">
        {/* <SignInUp/> */}
        <UserProvider>
          <div style={{ width: "400px" }}> <SideNavbar style={{overflow:"hidden"}} /> </div>

          <div style={{ width: "600px",overflow:"hidden", zIndex: "9", backgroundColor:"#15202B" }}>
            <Routes>
              <Route exact path="/tweet/:id" element={<ExpandedTweet />}/>
              
              <Route exact path="/profile" element={<UserProfile />} />
              <Route exact path="/profile/tweetblock" element={<TweetBlock />} />
              <Route exact path="/profile/followers" element={<Followers />} />
              <Route exact path="/profile/following" element={<Following />} />

            </Routes>
          </div>

          <rightside style={{ zIndex: "9", width: "519px", backgroundColor:"#15202B" }} />
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
