import { useState, useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { UserContext } from "../Contexts/userContext";

function UserProfile({}) {
  const [profile, setProfile] = useContext(UserContext);
  return (
    <div className="main_container">
      <AiOutlineArrowLeft
        style={{ width: "75px", fontSize: "20px", marginTop: "20px" }}
      />
      <h4 style={{ display: "inline-block", margin: "0" }}>{profile.Name}</h4>
      <h6 className="secFont" style={{ margin: "-13px 0 5px 75px" }}>
        {profile.tweetsNo} tweets
      </h6>
      {/* <div style={{backgroundImage:coverPic, width:"600px", height:"100px"}}></div> */}
      {/* <div style={{backgroundImage:profilePic,marginTop:"-50%",borderRadius:"100PX"}}></div> */}

      <img src={profile.CoverPic} style={{ width: "100%" }} />
      <div className="container flexSimpleContainer">
        <img src={profile.ProfilePic} className="profilePic" />
        <button class="btn btn-outline-light rounded-pill btn_">
          Edit Profile
        </button>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h4 className="container" style={{ margin: "0" }}>
          {profile.Name}
        </h4>
        <h6 className="container secFont">@{profile.handle}</h6>
      </div>

      <div className="container">
        {profile.POB_Statue && (
          <h6
            className="secFont"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            {profile.POB}
          </h6>
        )}
        {profile.DOB_Statue && (
          <h6
            className="secFont"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            Born {profile.DOB}
          </h6>
        )}
        <h6 className="secFont" style={{ display: "inline-block" }}>
          Joined {profile.DOJ}
        </h6>
      </div>
      <div className="container" style={{ display: "flex" }}>
        <h6 style={{ marginRight: "20px" }}>
          {profile.followersNO}{" "}
          <h6 className="secFont" style={{ display: "inline-block" }}>
            Followers
          </h6>
        </h6>
        <h6>
          {profile.followingNO}{" "}
          <h6 className="secFont" style={{ display: "inline-block" }}>
            Following
          </h6>
        </h6>
      </div>

      <div className="flexSimpleContainer borderLine">
        <button class="btn btn-outline-secondary bb border-0 rounded-0">
          Tweets
        </button>
        <button class="btn btn-outline-secondary bb border-0 rounded-0">
          Tweets & replies
        </button>
        <button class="btn btn-outline-secondary bb border-0 rounded-0">
          Media
        </button>
        <button class="btn btn-outline-secondary bb border-0 rounded-0">
          Likes
        </button>
        <hr />
      </div>
    </div>
  );
}
export default UserProfile;
