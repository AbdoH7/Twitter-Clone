import { AiOutlineArrowLeft } from "react-icons/ai";

function UserProfile({
  name,
  handle,
  tweetsNumber,
  profilePic,
  coverPic,
  DOB,
  DOJ,
  POB,
  DOB_S,
  POB_S,
  followerNUM,
  followingNUM,
}) {
  return (
    <div className="main_container">
      <AiOutlineArrowLeft
        style={{ width: "75px", fontSize: "20px", marginTop: "20px" }}
      />
      <h4 style={{ display: "inline-block", margin:"0" }}>{name}</h4>
      <h6 className="secFont" style={{ margin:"-13px 0 5px 75px" }}>
        {tweetsNumber} tweets
      </h6>
      {/* <div style={{backgroundImage:coverPic, width:"600px", height:"100px"}}></div> */}
      {/* <div style={{backgroundImage:profilePic,marginTop:"-50%",borderRadius:"100PX"}}></div> */}

      <img src={coverPic} style={{ width: "100%" }} />
      <div className="container flexSimpleContainer">
        <img src={profilePic} className="profilePic" />
        <button class="btn btn-outline-light rounded-pill btn_">
          Edit Profile
        </button>
      </div>
      <div style={{marginBottom:"30px"}}>
      <h4 className="container" style={{margin:"0"}}>{name}</h4>
      <h6 className="container secFont">@{handle}</h6>
      </div>
      

      <div className="container">
        {POB_S && (
          <h6
            className="secFont"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            {POB}
          </h6>
        )}
        {DOB_S && (
          <h6
            className="secFont"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            Born {DOB}
          </h6>
        )}
        <h6 className="secFont" style={{ display: "inline-block" }}>
          Joined {DOJ}
        </h6>
      </div>
      <div className="container" style={{ display: "flex" }}>
        <h6 style={{ marginRight: "20px" }}>
          {followerNUM}{" "}
          <h6 className="secFont" style={{ display: "inline-block" }}>
            Followers
          </h6> 
        </h6> 
        <h6>
          {followingNUM}{" "}
          <h6 className="secFont" style={{ display: "inline-block" }}>
            Following
          </h6>
        </h6>
      </div>

      <div className="flexSimpleContainer borderLine">
        <button class="btn btn-outline-secondary bb border-0 rounded-0">Tweets</button>
        <button class="btn btn-outline-secondary bb border-0 rounded-0">Tweets & replies</button>
        <button class="btn btn-outline-secondary bb border-0 rounded-0">Media</button>
        <button class="btn btn-outline-secondary bb border-0 rounded-0">Likes</button>
        <hr/>
      </div>
    </div>
  );
}
export default UserProfile;
