import { useContext, useState } from "react";
import { UserContext } from "../Contexts/userContext";
import './SideNavbar.css'
import { NavLink } from 'react-router-dom'
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from './icons'

function SideNavbar ({}) {

  const[aaaah, setProfile] = useContext(UserContext);
  return (
    <div className="left-pane">
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


// function SideNavbar(){
//     const [profile, setProfile] = useContext(UserContext);

//     return(
//         <div className="sidenav">
//             <div className="navContainer">
//                 <header>Twitter Icon</header>
//                 <nav style={{textDecoration:"none"}}>
//                     <NavLink to="/home">Home</NavLink>
//                     <NavLink to="/explore">Explore</NavLink>
//                     <NavLink to="/notifications">Notifications</NavLink>
//                     <NavLink to="/messages">Messages</NavLink>
//                     <NavLink to="/bookmarks">Bookmarks</NavLink>
//                     <NavLink to="/lists">Lists</NavLink>
//                     <NavLink to="/profile">Profile</NavLink>
                    
//                 </nav>
//                 <button className="tweet_btn">Tweet</button>
//             </div>

//         </div>
//     )

// }
// export default SideNavbar;