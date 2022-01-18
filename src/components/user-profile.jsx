import { useState, useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { UserContext } from "../Contexts/userContext";
import TweetBlock from "./tweet-block";
import { MdConstruction } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Ppic from "../Images/1.JPG";
import axios from "axios";
import { useEffect } from "react";

function UserProfile({ }) {
  const [profile, setProfile] = useContext(UserContext);
  const [toggleState, setToggleState] = useState(1);
  const [tweets, setTweets] = useState([{ id: 1, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "just setting up my twitter", date: "Nov 25, 2021" },
  { id: 2, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "welcome everyone", date: "Nov 25, 2021" }])
  const toggleTab = (index) => {
    setToggleState(index);
  };


  useEffect(() => {
    axios.get('https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/Profile/', profile.id).then(res => {
      console.log(res.data)
      const data = res.data
      data?.map((d) => setTweets(tweets => [...tweets, {
        id: d.tweet.id,
        handle: d.tweet.userId,
        user: d.tweet.name,
        content: d.tweet.text,
        date: d.tweet.timestamp,
        name: d.user.name,
        avatar: d.user.avatar
      }]))

    })

  }, [])
  // console.log(profile)








  return (
    <div
      //  className="main_container"
      style={{ zIndex: "10" }}>
      <div style={{ border: "1px solid #676F76" }}>
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
          <NavLink to="/profile/followers" style={{ textDecoration: 'none' }}>
            {" "}
            <h6 style={{ marginRight: "20px", color: "white" }}>
              {profile.followersNO}{" "}
              <h6 className="secFont" style={{ display: "inline-block" }}>
                Followers
              </h6>
            </h6>{" "}
          </NavLink>


          <NavLink to="/profile/following" style={{ textDecoration: 'none' }}>
            <h6 style={{ color: "white" }}>
              {profile.followingNO}{" "}
              <h6 className="secFont" style={{ display: "inline-block" }}>
                Following
              </h6>
            </h6>
          </NavLink>
        </div>

        <div className="flexSimpleContainer borderLine">
          <button
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "tabs active-tabs btn-outline-secondary bb border-0 rounded-0"
                : " tabs btn btn-outline-secondary bb border-0 rounded-0"
            }
          >
            Tweets
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? "tabs active-tabs btn-outline-secondary bb border-0 rounded-0"
                : " tabs btn btn-outline-secondary bb border-0 rounded-0"
            }
          >
            Tweets & replies
          </button>
          <button
            onClick={() => toggleTab(3)}
            className={
              toggleState === 3
                ? "tabs active-tabs btn-outline-secondary bb border-0 rounded-0"
                : " tabs btn btn-outline-secondary bb border-0 rounded-0"
            }
          >
            Media
          </button>
          <button
            onClick={() => toggleTab(4)}
            className={
              toggleState === 4
                ? "tabs active-tabs btn-outline-secondary bb border-0 rounded-0"
                : " tabs btn btn-outline-secondary bb border-0 rounded-0"
            }
          >
            Likes
          </button>
          <hr />
        </div>
      </div>

      <div className="content-tabs">
        <div
          style={{ width: "100%" }}
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

          {tweets.map((t) => (<TweetBlock tweet={t} />))}


        </div>
        <h1
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {" "}
          Under Construction <MdConstruction /> <br />
          Visit us soon
        </h1>
        <h1
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          {" "}
          Under Construction <MdConstruction /> <br />
          Visit us soon
        </h1>
        <h1
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          {" "}
          Under Construction <MdConstruction /> <br />
          Visit us soon
        </h1>
      </div>
    </div>
  );
}
export default UserProfile;
