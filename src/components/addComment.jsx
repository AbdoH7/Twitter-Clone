import React from 'react'
import Ppic from "../Images/1.JPG";
import axios from 'axios';
import { UserContext } from '../Contexts/userContext';
import { useContext } from 'react';


export default function AddComment(props) {
    const [user,setUser] = useContext(UserContext)
    const addReply = () => {
        

            var text = document.getElementById("tweetText").value
            document.getElementById("tweetText").value=""
    
            var bodyFormData = new FormData()
            bodyFormData.append('text', text)
            bodyFormData.append('userId', user.handle)
            bodyFormData.append('hasMedia', false)
            bodyFormData.append('mediaType', 4)
            bodyFormData.append('hasMention', false)
            bodyFormData.append('location', 'string')
            bodyFormData.append('timestamp', new Date().toUTCString())
    
    
            axios({
                        method: "post",
                        url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/reply/'+props.tweet.id,
                        data: bodyFormData,
                        headers:{"Content-Type": "multipart/form-data"}
                    }).then(function (res){
                        console.log(res)
                    }).catch(function name(err) {
                        console.log(err)            
                    })
                 
        
    }
    return (
        <div style={styles.container}>

            

            <div style={{ display: "flex", marginTop: "10px" }} >
                <img src={Ppic} className="rounded-circle" style={{ width: "53px", height: "53px", margin: "5px" }} />
                <h6 style={{ margin: "5px", fontWeight: "bolder", color:"white" }}>{props.tweet.user}</h6>
                <h6 style={{ marginTop: "5px", color: "gray" }}>@{props.tweet.handle}</h6>
                <h6 style={{ marginLeft: "15px", marginTop: "5px", color: "gray" }}>{props.tweet.date}</h6>
                

            </div>
            <div style={{ marginLeft: "70px", marginTop: "-30px" }}>
                <p style={{ height: "65px", color:"white" }}>{props.tweet.content}</p>

            </div>
            
            <div>
                <h6 className="secFont">Replying to @{props.tweet.handle}</h6>
                <textarea id='tweetText' rows="4" cols="65">

                </textarea>
                <br />
                <button style={styles.reply} onClick={addReply}>Reply</button>
            </div>


        </div>
    )
}
const styles = {
    container: {
        backgroundColor: "#15202B",
        padding:"10px",
        //boxShadow:"0 2px 10px 0 rgba(88,88,88,0.5)",
        // margin: "auto",
        borderRadius:"20px",
        width: "550px",
        // height: "200px"s

    },
    reply: {
        // float: "left",
        display: "inline-block",
        background: "#1da1f2",
        color: "#fff",
        padding:'8px 40px',
        // width: "100px",
        // height: "40px",
        borderRadius: "1.5em",
        fontSize: "1em",
        cursor: "pointer"
    }
};
