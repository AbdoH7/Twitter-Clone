
import React from 'react'
import axios from 'axios'
import { UserContext } from '../Contexts/userContext'
import { useContext } from 'react'



export default function ComposeTweet() {

    const [user,setUser] = useContext(UserContext)

    const addTweet = () => {

        var text = document.getElementById("tweetText").value
        document.getElementById("tweetText").value=""

        var bodyFormData = new FormData()
        bodyFormData.append('text', text)
        bodyFormData.append('userId', user.id)
        bodyFormData.append('hasMedia', false)
        bodyFormData.append('mediaType', 4)
        bodyFormData.append('hasMention', false)
        bodyFormData.append('location', 'string')
        bodyFormData.append('timestamp', new Date().toUTCString())


        axios({
                    method: "post",
                    url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweets',
                    data: bodyFormData,
                    headers:{"Content-Type": "multipart/form-data"}
                }).then(function (res){
                    console.log(res)
                }).catch(function name(err) {
                    console.log(err)            
                })
             
    }
    return (
        <div>
            <div style={styles.container}>

                <textarea id='tweetText' rows="4" cols="65" placeholder="what's happining">

                </textarea >
                <br />
                <button style={styles.reply} onClick={addTweet}>Tweet</button>
            </div>



        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#15202B",
        padding: "10px",
        //boxShadow:"0 2px 10px 0 rgba(88,88,88,0.5)",
        // margin: "auto",
        borderRadius: "20px",
        width: "550px",
        // height: "200px"s

    },
    reply: {
        // float: "left",
        display: "inline-block",
        background: "#1da1f2",
        color: "#fff",
        padding: '8px 40px',
        // width: "100px",
        // height: "40px",
        borderRadius: "1.5em",
        fontSize: "1em",
        cursor: "pointer"
    }
};