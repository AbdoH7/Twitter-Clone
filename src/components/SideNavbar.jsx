import { useContext, useState } from "react";
import { UserContext } from "../Contexts/userContext";
import '../styles/SideNavbar.css'
import { NavLink } from 'react-router-dom'
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from '../scripts/icons'
import { getAuth, signOut } from "firebase/auth";
import {MdLogout} from 'react-icons/md'
import { width } from "@mui/system";


const auth = getAuth()
const signOut_ = (event) => {
  event.preventDefault();
  signOut(auth).then(() => {
    window.localStorage.setItem('token',undefined)
    window.localStorage.setItem('username',undefined)
    console.log('Signed out successfully')
  }).catch((error) => {
    console.log(error.stack,error.message)
  });
}

function SideNavbar ({}) {

  const[aaaah, setProfile] = useContext(UserContext);
  return (
    <div className="left-pane" style={{ backgroundColor:"#15202B"}}>
      <div className="container">
        <header>{twitter}</header>

        <nav>
          <NavLink to="/" activeClassName="selected">
            <span>{home} Home</span>
          </NavLink>
          <NavLink to="/explore" activeClassName="selected">
            <span>{explore} Explore</span>
          </NavLink>
          <NavLink to="/notifications" activeClassName="selected">
            <span>{notifications} Notifications</span>
          </NavLink>
          <NavLink to="/messages" activeClassName="selected">
            <span>{messages} Messages</span>
          </NavLink>
          <NavLink to="/bookmarks" activeClassName="selected">
            <span>{bookmarks} Bookmarks</span>
          </NavLink>
          <NavLink to="/lists" activeClassName="selected">
            <span>{lists} Lists</span>
          </NavLink>
          <NavLink to="/profile" activeClassName="selected">
            <span>{profile} Profile</span>
          </NavLink>
          <button className="more">
            <span>{more} More</span>
          </button>
        </nav>

        <button className="tweet">Tweet</button>

        <footer>
          <button className="account">
            <div className="photo">
              <img
                src={aaaah.ProfilePic}
              />
            </div>
            <div >
              <div className="name">{aaaah.Name}</div>
              <div className="username">@{aaaah.handle}</div>
            </div>
          </button>
          <a onClick={signOut_} style={{color:"white"}}href="/"><MdLogout style={{width:"25px",height:"25px"}}/></a>
        </footer>
      </div>
    </div>
  )
}

export default SideNavbar

