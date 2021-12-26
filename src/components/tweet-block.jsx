import { useState, useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import { BsReply, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
function TweetBlock({ }) {
    const [profile, setProfile] = useContext(UserContext);
    const [like, setLike] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [more, setMore] = useState(false);
    const isLiked = () => {
        if (!like) setLike(true);
        else setLike(false);
    }
    const isRetweeted = () => {
        if (!retweet) setRetweet(true);
        else setRetweet(false);
    }
    const reply = () => {
        console.log("reply button triggered")
    }
    const share = () => {
        console.log("share button is triggered")
    }
    const analytics = () => {
        console.log("analytics button is triggered")
    }
    const moreClicked =() => {
        console.log("more clicked")
    }

    return (
        <div style={{ width: "100%", margin: "auto",marginBottom:"0", border:"1px solid #676F76"}}>

            <div style={{ display: "flex", marginTop: "10px" }}>
                <img src={profile.ProfilePic} className="rounded-circle" style={{ width: "53px", height: "53px", margin: "5px" }} />
                <h6 style={{ margin: "5px", fontWeight: "bolder" }}>{profile.Name}</h6>
                <h6 style={{ marginTop: "5px", color: "gray" }}>@{profile.handle}</h6>
                <h6 style={{ marginLeft: "15px", marginTop: "5px", color: "gray" }}>Nov 25, 2021</h6>
                <button style={{border:"none",height:"16px",width:"16px"}} onClick={moreClicked}> <BsThreeDots style={{ marginLeft:"50px", color:"white" }}></BsThreeDots> </button>
                

            </div>
            <div style={{ marginLeft: "70px", marginTop: "-30px" }}>
                <p style={{ height: "65px" }}>just setting up my twitter</p>

            </div>
            <div style={{ display: " flex", justifyContent: "space-around", marginBottom: "20px" }}>
                <button style={{ border: "none" }} onClick={reply}><BsReply style={{ color: "white" }} /> </button>
                <button style={{ border: "none" }} onClick={isRetweeted}>{retweet ? <AiOutlineRetweet style={{ color: "green" }} /> : <AiOutlineRetweet style={{ color: "white" }} />}</button>
                <button style={{ border: "none" }} onClick={isLiked}>{like ? <AiFillHeart style={{ color: "#F91880" }} /> : <AiOutlineHeart style={{ color: "white" }} />}</button>
                <button style={{ border: "none" }} onClick={share}><FiShare style={{ color: "white" }} /></button>
                <button style={{ border: "none" }} onClick={analytics}><SiSimpleanalytics style={{ color: "white" }} /></button>
                

            </div>
            <hr style={{color:"gray"}}/>
        </div>
    );
}
export default TweetBlock;
