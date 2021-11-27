import { useContext, useState } from "react";
import { UserContext } from "../Contexts/userContext";
import './SideNavbar.css'
import { NavLink } from 'react-router-dom'
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from './icons'

function SideNavbar ({}) {

  const[aaaah, setProfile] = useContext(UserContext);
  return (
    <div className="left-pane" style={{width:"450px",zIndex:"12", backgroundColor:"#15202B"}}>
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
            <div style={{marginLeft:"-25px"}}>
              <div className="name">{aaaah.Name}</div>
              <div className="username">@{aaaah.handle}</div>
            </div>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default SideNavbar

