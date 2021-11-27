import React from 'react';
import { UserContext } from '../Contexts/userContext';
import { useState, useContext } from "react";

function FollowerBlock() {
    const [profile, setProfile] = useContext(UserContext);
    const [followStat, setFollowStat] = useState(false);
    const isFollowed =() =>{
        if (!followStat) setFollowStat(true)
        else setFollowStat(false)
    }
    const unfollowHoverBtn =(e) =>{
        if(followStat){
            e.target.className = "btn btn-outline-danger rounded-pill btnFollower"
            e.target.innerHTML = "Unfollow"
            
        }
    }
    const normalFollowBtn1 = (e) =>{
        if(followStat){
            e.target.className = "btn btn-outline-light rounded-pill btnFollower"
            e.target.innerHTML = "Following"
        }
        
    }

    return (
        <div style={{ display: "flex",justifyContent:"space-between",margin:"0 0 30px 15px" }}>
            <div style={{ display: "flex" }}>
                <img src={profile.ProfilePic} className="followerProfilePic" />
                <div>
                    <h6 style={{ margin: "0" }}>{profile.Name}</h6>
                    <div>
                        <h6 className="secFont" style={{display:"inline-block"}}>@{profile.handle}</h6>
                        <h6 style={{backgroundColor:"#253341", color:"#8899A6", width:"80px", height:"20px", display:"inline-block", fontSize: "14px", margin:"0 0 0 5px",textAlign:"center", borderRadius:"6px"}}>Follows you</h6>
                    </div>
                    
                </div>
            </div>

            <button style={{marginRight:"10px"}} className={followStat? "btn btn-outline-light rounded-pill btnFollower": "btn btn-light rounded-pill btnFollower" }  onClick={isFollowed} onMouseOver={unfollowHoverBtn} onMouseLeave={normalFollowBtn1}>{followStat? "Following": "Follow"}</button>
        </div>

    )
}
export default FollowerBlock
