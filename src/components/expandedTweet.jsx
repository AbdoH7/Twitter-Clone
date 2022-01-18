import React from 'react'
import { useLocation, useParams } from 'react-router'
import { BsReply, BsThreeDots, BsBookmark  } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import Ppic from "../Images/1.JPG";
import TweetBlock from './tweet-block';
import '../styles/expandedTweet.scss'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../Contexts/userContext';
import Popup from 'reactjs-popup';
import AddComment from './addComment';


export default function ExpandedTweet() {

    //! Caveman approach
    const id = window.location.href.split('/')[4]

    //const tweet = { id: 1, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "just setting up my twitter", date: "Nov 25, 2021", likes: "50" }
    const [replies, setReplies] = useState( [{ id: 3, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "looks good", date: "Nov 25, 2021" },
    { id: 5, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "nice website", date: "Nov 25, 2021" },
    { id: 9, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "keep it up bro", date: "Nov 25, 2021" }])
    
    const [profile, setProfile] = useContext(UserContext);


    const [like, setLike] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [bookmark,setBookmark] = useState(false);
    const [more, setMore] = useState(false);
    const [addReply, setAddReply] = useState(false);


    const isLiked = () => {
        if (!like){
            setLike(true);
            
            let body = {userId:profile.id}
            axios({
                method: "post",
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/like/'+tweet1.id,
                data: body,
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
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/like/'+tweet1.id,
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
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/bookmark/'+tweet1.id,
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
                url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/bookmark/'+tweet1.id,
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


    
    const [tweet1, setTweet] = useState({id:"",handle:"",user:"",content:"",date:""})
    useEffect(() => {
        axios.get('https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweet/'+id).then(res => {
            const data = res.data.tweetData
            const replies = res.data.replies

            console.log(replies)
            setTweet({
                id: data.id,
                handle: data.userId,
                user: data.name,
                content: data.text,
                date: data.timestamp,
                likesCount:data.likesCount,
            })

            replies?.map((d) => setReplies(replies => [...replies, {
                id: d.id,
                handle: d.username,
                user: d.name,
                content: d.text,
                date: d.timestamp
            }]))
            
        })

    }, [])

    

    return (
        <div>


            <div className='tweet-wrapper'>
                <h4 className="title-view">Tweet</h4>
                <div className="tweet-content">
                    <div className="tweet-header">
                        <div className="tweet-user-info">
                            <div className="avatar"></div>
                            <div className="user-info">
                                <p className="name">{tweet1.user}</p>
                                <p className="user-name">@{tweet1.handle}</p>
                            </div>
                        </div>
                        <div className="tweet-actions-toggle"><button><BsThreeDots /></button></div>
                    </div>
                    <div className="tweet-body">
                        <p>{tweet1.content}</p>
                    </div>
                    <div className="tweet-info">{tweet1.date}</div>
                </div>
                <div className="tweet-statistics">
                    <div className="retweets-statistics">
                        <span >2 <span style={{ color: "#9ca7b0" }}>Retweets</span></span>
                        <span className="tweet-likes" >{tweet1.likesCount} <span style={{ color: "#9ca7b0" }}>Likes</span></span>
                    </div>
                </div>
                <div className="tweet-controls">
                    
                <Popup
                    
                    trigger={<button style={{ border: "none" }} onClick={reply}><BiMessageRounded style={{ color: "white"}} /> </button>}
                    modal
                    contentStyle={{width:"600px", margin:"auto"}}
                    
                >
                   <AddComment setReply={setAddReply} tweet={tweet1} />
                </Popup >


                    <button onClick={isRetweeted}>{retweet ? <AiOutlineRetweet style={{ color: "green" }} /> : <AiOutlineRetweet style={{ color: "white" }} />}</button>
                    <button onClick={isLiked}>{like ? <AiFillHeart style={{ color: "#F91880" }} /> : <AiOutlineHeart style={{ color: "white" }} />}</button>
                    <button><FiShare /></button>
                    <button style={{ border: "none" }} onClick={isBookmark}>{bookmark ? <BsBookmark style={{ color: "green" }} /> : <BsBookmark style={{ color: "white" }} />}</button>
                </div>
            </div>
            {/* <div style={{ display: "flex", marginTop: "10px" }} >
                <img src={Ppic} className="rounded-circle" style={{ width: "53px", height: "53px", margin: "5px" }} />
                <h6 style={{ margin: "5px", fontWeight: "bolder" }}>{tweet.user}</h6>
                <h6 style={{ marginTop: "5px", color: "gray" }}>@{tweet.handle}</h6>
                <h6 style={{ marginLeft: "15px", marginTop: "5px", color: "gray" }}>{tweet.date}</h6>
                <button style={{ border: "none", height: "16px", width: "16px" }} onClick={moreClicked}> <BsThreeDots style={{ marginLeft: "50px", color: "white" }}></BsThreeDots> </button>


            </div>
            <div style={{ marginLeft: "70px", marginTop: "-30px" }}>
                <p style={{ height: "65px" }}>{tweet.content}</p>

            </div>
            <div>
                <h6 className='secFont' >{tweet.date}</h6>
            </div> */}


            <div className="replies-container">
                {replies.map((t) => (<TweetBlock tweet={t} />))}
            </div>
        </div>
    )
}