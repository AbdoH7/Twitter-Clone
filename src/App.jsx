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
import SignInUp from "./components/signInUp";
<<<<<<< Updated upstream
=======
import NewloginPage from "./components/NewloginPage";
import { getAuth } from 'firebase/auth';
import Home from "./components/home";
>>>>>>> Stashed changes

function App(props) {


  return (
    <BrowserRouter>
      <div className="App">
<<<<<<< Updated upstream
        <SignInUp/>
        {/* <UserProvider>
          <div style={{ width: "400px" }}> <SideNavbar /> </div>

          <div style={{ width: "625x", zIndex: "9" }}>
            <Routes>
              <Route exact path="/tweet/:id" element={<ExpandedTweet />}/>
=======
        
        
          {/* <SignInUp/> */}
         <UserProvider>
           <div style={{ width: "400px" }}> <SideNavbar /> </div>

           <div style={{ width: "625x", zIndex: "9" }}>
             <Routes>
               <Route exact path="/tweet/:id" element={<ExpandedTweet />}/>
               <Route exact path="/home" element={<Home />}/>
>>>>>>> Stashed changes
              
              <Route exact path="/profile" element={<UserProfile />} />
              <Route exact path="/profile/tweetblock" element={<TweetBlock />} />
              <Route exact path="/profile/followers" element={<Followers />} />
              <Route exact path="/profile/following" element={<Following />} />

            </Routes>
          </div>

<<<<<<< Updated upstream
          <rightside style={{ zIndex: "9", width: "497px" }} />
        </UserProvider> */}
=======
           <rightside style={{ zIndex: "9", width: "497px" }} />
         </UserProvider>
>>>>>>> Stashed changes
      </div>
    </BrowserRouter>
  );
}

export default App;
