import {NavLink} from "react-router-dom"
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/userContext";
import './SideNavbar.css'


function SideNavbar(){
    const [profile, setProfile] = useContext(UserContext);

    return(
        <div className="sidenav">
            <div className="navContainer">
                <header>Twitter Icon</header>
                <nav style={{textDecoration:"none"}}>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/explore">Explore</NavLink>
                    <NavLink to="/notifications">Notifications</NavLink>
                    <NavLink to="/messages">Messages</NavLink>
                    <NavLink to="/bookmarks">Bookmarks</NavLink>
                    <NavLink to="/lists">Lists</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    
                </nav>
                <button className="tweet_btn">Tweet</button>
            </div>

        </div>
    )

}
export default SideNavbar;