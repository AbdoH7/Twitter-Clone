import { createContext, useState } from "react";


export const UserContext = createContext();

const default_ = {
  Name: "loading..",
  handle: "loading...",
  tweetsNo: "...",
  POB: "loading",
  POB_Statue: true,
  DOB: "February 11, 2000",
  DOB_Statue: true,
  DOJ: "loading...",
  ProfilePic: 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/default-avatar.png?alt=media&token=7cb1d4bd-3672-4e2f-ae18-9d2fadb7c0a8',
  CoverPic: 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/defCover.jpeg?alt=media&token=c1f0ccdb-dd31-41b0-9b12-c09a7f5c2a25',
  followersNO: 300,
  followingNO: 200,
  isLogged: false,
}




export const UserProvider = props => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('context')) || default_);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
// export const UserProvider = async (props) => {

//   const response = await axios.get('/user/' + localStorage.getItem("username"))
//   const data = response.data
//   const [user, setUser] = useState({
//     Name: data.name,
//     handle: data.username,
//     tweetsNo: data.tweetsNo,
//     POB: "Alexandria, Egypt",
//     POB_Statue: true,
//     DOB: data.birthdate,
//     DOB_Statue: true,
//     DOJ: data.creationDate,
//     ProfilePic: data.avatar || 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/default-avatar.png?alt=media&token=7cb1d4bd-3672-4e2f-ae18-9d2fadb7c0a8',
//     CoverPic: data.coverPhoto || 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/defCover.jpeg?alt=media&token=c1f0ccdb-dd31-41b0-9b12-c09a7f5c2a25',
//     followersNO: data.followers,
//     followingNO: data.following,
//     isLogged: true
//   })

//   return (
//     <UserContext.Provider value={[user, setUser]}>
//       {props.children}
//     </UserContext.Provider>
//   );
