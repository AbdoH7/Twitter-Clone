import { createContext, useState } from "react";
import Ppic from "../1.JPG";
import Cpic from "../download.png";
import UserProfile from './../components/user-profile';





export const UserContext = createContext();


export const UserProvider = props =>{
    const [user, setUser] = useState({
        Name: "Abdulrahman Hussein",
        handle: "Abdulrahman",
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
      return(
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
      );
}