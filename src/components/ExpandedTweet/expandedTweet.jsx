import React from 'react'
import { useLocation, useParams } from 'react-router'
import { BsReply, BsThreeDots } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import Ppic from "../../1.JPG";
import TweetBlock from '../tweet-block';
import './expandedTweet.scss'



export default function ExpandedTweet() {
    
    //! Caveman approach
    const id = window.location.href.split('/')[4]

    const tweet ={ id: 1, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "just setting up my twitter", date: "Nov 25, 2021", likes:"50" }
    const replies =[{ id: 3, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "looks good", date: "Nov 25, 2021" },
    { id: 5, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "nice website", date: "Nov 25, 2021" },
    { id: 9, user: "Abdulrahman Hussein", handle: "Abdulrahman", content: "keep it up bro", date: "Nov 25, 2021" }]
    const moreClicked = () => {
        console.log("more clicked")
    }

    
    return (
        <div>
            
            
            <div className='tweet-wrapper'>
                <h4 className="title-view">Tweet</h4>
                <div className="tweet-content">
                    <div className="tweet-header">
                        <div className="tweet-user-info">
                            <div className="avatar"></div>
                            <div className="user-info">
                                <p className="name">BzBz</p>
                                <p className="user-name">@yourfavBuZzLightYear</p>
                            </div>
                        </div>
                        <div className="tweet-actions-toggle"><button><BsThreeDots/></button></div>
                    </div>
                    <div className="tweet-body">
                        <p>Some Tweet Content by some user.......</p>
                    </div>
                    <div className="tweet-info">7:35 PM • Jan 17, 2022 • Twitter for iPhone</div>
                </div>
                <div className="tweet-statistics">
                    <div className="retweets-statistics">
                        <span >2 <span style={{color: "#9ca7b0"}}>Retweets</span></span>
                        <span className="tweet-likes" >20 <span style={{color: "#9ca7b0"}}>Likes</span></span>
                    </div>
                </div>
                <div className="tweet-controls">
                    <button><BiMessageRounded/></button>
                    <button><AiOutlineRetweet/></button>
                    <button><AiOutlineHeart/></button>
                    <button><FiShare/></button>
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
                {replies.map((t)=>(<TweetBlock tweet={t}/>))}
            </div>
        </div>
    )
}
