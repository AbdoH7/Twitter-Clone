import { useState, useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import { BiMessageRounded } from "react-icons/bi";

import AddComment from './addComment';
import Popup from "reactjs-popup";
import { useNavigate } from 'react-router-dom';
function TweetBlock(props) {
    
    const [profile, setProfile] = useContext(UserContext);
    const [like, setLike] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [more, setMore] = useState(false);
    const [addReply, setAddReply] = useState(false);
    // let history = useHistory();
    let navigate = useNavigate();
    const expandTweet = (e) => {
        console.log(e.target.tagName)
        if(e.target.tagName!="svg"&&e.target.tagName!="path"){
        // window.history.pushState("", "", "/tweet/"+props.tweet.id)
        navigate(`/tweet/${props.tweet.id}`,{state:{
            id:props.tweet.id
        }})
        }
    }
    const isLiked = () => {
        if (!like) setLike(true);
        else setLike(false);

    }
    const isRetweeted = () => {
        if (!retweet) setRetweet(true);
        else setRetweet(false);
    }
    const reply = () => {

        if (!addReply) setAddReply(true);
        else setAddReply(false);


    }
    const share = () => {
        console.log("share button is triggered")
    }
    const analytics = () => {
        console.log("analytics button is triggered")
    }
    const moreClicked = () => {
        console.log("more clicked")
    }

    return (
        
        <div style={{ width: "100%", margin: "auto", marginBottom: "0"}} onClick={expandTweet}>


            <div style={{ display: "flex", marginTop: "10px" }} >
                <img src={profile.ProfilePic} className="rounded-circle" style={{ width: "53px", height: "53px", margin: "5px" }} />
                <h6 style={{ margin: "5px", fontWeight: "bolder" }}>{props.tweet.user}</h6>
                <h6 style={{ marginTop: "5px", color: "gray" }}>@{props.tweet.handle}</h6>
                <h6 style={{ marginLeft: "15px", marginTop: "5px", color: "gray" }}>{props.tweet.date}</h6>
                <button style={{ border: "none", height: "16px", width: "16px" }} onClick={moreClicked}> <BsThreeDots style={{ marginLeft: "50px", color: "white" }}></BsThreeDots> </button>


            </div>
            <div style={{ marginLeft: "70px", marginTop: "-30px" }}>
                <p style={{ /* height: "65px" */ }}>{props.tweet.content}</p>

            </div>
            <div id="buttons" style={{ display: " flex", justifyContent: "space-around", paddingBottom: "16px", marginTop: "16px", borderBottom: "0.1px solid rgb(56, 68, 77)"}}>


                <Popup
                    
                    trigger={<button style={{ border: "none" }} onClick={reply}><BiMessageRounded style={{ color: "white"}} /> </button>}
                    modal
                    contentStyle={{width:"600px", margin:"auto"}}
                    
                >
                   <AddComment setReply={setAddReply} tweet={props.tweet} />
                </Popup >

                {/* <button style={{ border: "none" }} onClick={reply}><BsReply style={{ color: "white" }} /> </button> */}
                <button style={{ border: "none" }} onClick={isRetweeted}>{retweet ? <AiOutlineRetweet style={{ color: "green" }} /> : <AiOutlineRetweet style={{ color: "white" }} />}</button>
                <button style={{ border: "none" }} onClick={isLiked}>{like ? <AiFillHeart style={{ color: "#F91880" }} /> : <AiOutlineHeart style={{ color: "white" }} />}</button>
                <button style={{ border: "none" }} onClick={share}><FiShare style={{ color: "white" }} /></button>
                <button style={{ border: "none" }} onClick={analytics}><BsBookmark style={{ color: "white" }} /></button>


            </div>
            {/* <hr style={{ color: "gray" }} /> */}
            {/* {addReply ? <AddComment setReply={setAddReply} tweet={tweet} /> : console.log("hi")} */}
        </div>
    );
}
export default TweetBlock;
