import { useState } from "react";
import "./App.css";
import UserProfile from "./components/user-profile";
import Ppic from "./1.JPG";
import Cpic from "./download.png";

function App() {
  const [user, setUser] = useState({
    Name: "Abdulrahman Hussein",
    handle: "AbdulrahmanAH7",
    tweetsNo: 100,
    POB: "Alexandria, Egypt",
    POB_Statue: true,
    DOB: "February 11, 2000",
    DOB_Statue: true,
    DOJ: "October 2013",
    ProfilePic: Ppic,
    CoverPic: Cpic,
    followersNO:300,
    followingNO: 200
  });

  return (
    <div>
      <UserProfile
        name={user.Name}
        tweetsNumber={user.tweetsNo}
        handle={user.handle}
        POB={user.POB}
        POB_S={user.POB_Statue}
        DOB={user.DOB}
        DOB_S={user.DOB_Statue}
        DOJ={user.DOJ}
        profilePic={user.ProfilePic}
        coverPic={user.CoverPic}
        followerNUM={user.followersNO}
        followingNUM={user.followingNO}
      />
    </div>
  );
}

export default App;
