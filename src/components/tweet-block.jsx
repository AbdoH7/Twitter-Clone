import { useState, useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import { BiMessageRounded } from "react-icons/bi";
import axios from "axios";

import AddComment from './addComment';
import Popup from "reactjs-popup";
import { useNavigate } from 'react-router-dom';
function TweetBlock(props) {
    
    const [profile, setProfile] = useContext(UserContext);
    const [like, setLike] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [bookmark,setBookmark] = useState(false);
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
        if (!like){
            setLike(true);
            
            let bodyFormData = new FormData()
            bodyFormData.append('userId',profile.id)
            axios({
                method: "post",
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/like/'+props.tweet.id,
                data: JSON.stringify(profile.id),
                headers:{"Content-Type": "multipart/form-data"}
            }).then(function (res){
                console.log(res)
            }).catch(function name(err) {
                console.log(err)            
            })

        }
        else {
            setLike(false);
            setBookmark(false);
            let bodyFormData = new FormData()
            bodyFormData.append('userId',profile.id)
            axios({
                method: "delete",
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/like/'+props.tweet.id,
                data: bodyFormData,
                headers:{"Content-Type": "multipart/form-data"}
            }).then(function (res){
                console.log(res)
            }).catch(function name(err) {
                console.log(err)            
            })

        }
    }
    const isRetweeted = () => {
        if (!retweet) {
            setRetweet(true);
            
        }
        else {
            setRetweet(false);
            
        }
    }
    const isBookmark = () => {
        if (!bookmark) {
            setBookmark(true);
            let bodyFormData = new FormData()
            bodyFormData.append('userId',profile.id)
            bodyFormData.append('timestamp',new Date().toUTCString())
            axios({
                method: "post",
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/bookmark/'+props.tweet.id,
                data: bodyFormData,
                headers:{"Content-Type": "multipart/form-data"}
            }).then(function (res){
                console.log(res)
            }).catch(function name(err) {
                console.log(err)            
            })

        }
        else {
            setBookmark(false);
            let bodyFormData = new FormData()
            bodyFormData.append('userId',profile.id)
            axios({
                method: "delete",
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/bookmark/'+props.tweet.id,
                data: bodyFormData,
                headers:{"Content-Type": "multipart/form-data"}
            }).then(function (res){
                console.log(res)
            }).catch(function name(err) {
                console.log(err)            
            })
        }
    }
    const reply = () => {

        if (!addReply) setAddReply(true);
        else setAddReply(false);


    }
    const share = () => {
        console.log("share button is triggered")
    }
    
    const moreClicked = () => {
        console.log("more clicked")
    }
    //console.log(props.tweet)

    return (
        
        <div style={{ width: "100%", margin: "auto", marginBottom: "0"}} onClick={expandTweet}>


            <div style={{ display: "flex", marginTop: "10px" }} >
                <img src={props.tweet.avatar} className="rounded-circle" style={{ width: "53px", height: "53px", margin: "5px" }} />
                <h6 style={{ margin: "5px", fontWeight: "bolder" }}>{props.tweet.name}</h6>
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
                <button style={{ border: "none" }} onClick={isBookmark}>{bookmark ? <BsBookmark style={{ color: "green" }} /> : <BsBookmark style={{ color: "white" }} />}</button>


            </div>
            {/* <hr style={{ color: "gray" }} /> */}
            {/* {addReply ? <AddComment setReply={setAddReply} tweet={tweet} /> : console.log("hi")} */}
        </div>
    );
}
export default TweetBlock;