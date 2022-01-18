import { createContext, useState } from "react";
const axios = require('axios').default


export const UserContext = createContext();


export const UserProvider = props => {
  const [user, setUser] = useState({})
  axios.get('/user/' + localStorage.getItem("username"))
    .then((response) => {
      const data = response.data
      setUser({
        Name: data.name,
        handle: data.username,
        tweetsNo: data.tweetsNo,
        POB: "Alexandria, Egypt",
        POB_Statue: true,
        DOB: data.birthdate,
        DOB_Statue: true,
        DOJ: data.creationDate,
        ProfilePic: data.avatar || 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/default-avatar.png?alt=media&token=7cb1d4bd-3672-4e2f-ae18-9d2fadb7c0a8',
        CoverPic: data.coverPhoto || 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/defCover.jpeg?alt=media&token=c1f0ccdb-dd31-41b0-9b12-c09a7f5c2a25',
        followersNO: data.followers,
        followingNO: data.following,
        isLogged: true
      });
      


    })
    .catch(e => console.log(e.message,e.stack))

    return (
      <UserContext.Provider value={[user, setUser]}>
        {props.children}
      </UserContext.Provider>
    );


}