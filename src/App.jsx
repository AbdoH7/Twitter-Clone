import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./Contexts/userContext";
import "./styles/App.css";
import UserProfile from "./components/user-profile";
import SideNavbar from "./components/SideNavbar";
import TweetBlock from "./components/tweet-block";
import Followers from "./components/followers";
import Following from "./components/following";
import ExpandedTweet from "./components/expandedTweet";
import NewloginPage from "./components/Registeration/NewloginPage";
import Home from './components/home'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();



function App(props) {
  
  const [status,setStatus] = useState(window.localStorage.getItem('username') ? true : false)

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        
        <UserProvider>
           
          {status ?
            <><div style={{ width: "400px" }}> <SideNavbar /> </div>

              <div style={{ width: "625x", zIndex: "9" }}>
                <Routes>
                  <Route exact path="/tweet/:id" element={<ExpandedTweet />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/profile" element={<UserProfile />} />
                  <Route exact path="/profile/tweetblock" element={<TweetBlock />} />
                  <Route exact path="/profile/followers" element={<Followers />} />
                  <Route exact path="/profile/following" element={<Following />} />
                  <Route exact path="/home" element={<Home />} />

                </Routes>
              </div>
              <rightside style={{ zIndex: "9", width: "497px" }} /></> : <NewloginPage />}



        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
