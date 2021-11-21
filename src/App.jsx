import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Contexts/userContext";
import "./App.css";
import UserProfile from "./components/user-profile";
import SideNavbar from "./components/SideNavbar/SideNavbar";


function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <UserProvider>
           <SideNavbar /> 
          <Routes>
            <Route path="/profile" element={<UserProfile/>}/>
              
          </Routes>
          <rightside>
            right here
          </rightside>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
