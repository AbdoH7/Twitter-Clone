import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import FollowingBlock from "./following-block";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css"
function Followers() {
    const [profile, setProfile] = useContext(UserContext);
    const followsMe = true
    return (
        <div className="main_container" style={{ zIndex: "9",border:"1px solid #676F76" }}>
            <div style={{borderBottom:"1px solid #676F76",marginBottom:"10px"}}>
                <div style={{ display: "flex", marginTop:"5PX" }}>
                    <AiOutlineArrowLeft style={{margin:"10px 35px 0 10px " }} />
                    <div style={{ marginBottom: "20px" }}>
                        <h5 style={{ margin: "0" }}>{profile.Name}</h5>
                        <h6 className="secFont">@{profile.handle}</h6>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    
                    
                        <button className="tabs btn btn-outline-secondary bb border-0 rounded-0"> <NavLink style={{textDecoration:"none", color:"#8899A6", width:"100%",height:"100%"}} to="/profile/followers">Followers</NavLink></button>
                    
                    
                    <button className="tabs active-tabs btn-outline-secondary bb border-0 rounded-0">Following</button>
                </div>
            </div>



            <FollowingBlock />
            <FollowingBlock />
        </div>
    )

}
export default Followers;