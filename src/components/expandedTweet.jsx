import React from 'react'
import { useLocation, useParams } from 'react-router'
import { BsReply, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import Ppic from "../1.JPG";



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
            
            <h4>Tweet</h4>
            <div style={{ display: "flex", marginTop: "10px" }} >
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
            </div>



            {replies.map((t)=>(<div>{t.content} </div>))}
        </div>
    )
}
