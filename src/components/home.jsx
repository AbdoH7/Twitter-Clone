import React from 'react'

import { BsTwitter } from "react-icons/bs";

//import axios from 'axios'
const axios = require('axios').default
axios.defaults.baseURL = 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App';
axios.defaults.headers['Access-Control-Allow-Origin'] = null


// const api = axios.create({
//     baseURL: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App'
// })
//import { MediaType } from './mediaType'

export default function Home() {

    // const tweet = {
    //     //id: string,
    //     text: "hi there",
    //     userId: "",
    //     postPrivacy: "",
    //     //hasMedia: boolean,
    //     mediaType: 4,
    //     //mediaContent: string[],
    //     hasMention: false,
    //     isRepost: false,
    //     //repostToPostId: string,
    //     //isReply: boolean,
    //     //repliesCount: number,
    //     //repostCount: number,
    //     location: "",
    //     timestamp: new Date().toUTCString

    // }
    const tweet = {
        text: "string123",  // textual content of the tweet
        userId: "string", // the string identifier of the user
        hasMedia: false, // if contains Media, set it to true
        mediaType: 4, // enum representing media type( video, picture, voice)
        hasMention: false, // if it has mentions, pass as true
        location: "string", // string descriping location
        timestamp: 10 // timestamp double number
    }



    var bodyFormData = new FormData()
    bodyFormData.append('text', 'hi there')
    bodyFormData.append('userId', 'string')
    // bodyFormData.append('hasMedia', false)
    bodyFormData.append('mediaType', 4)
    bodyFormData.append('hasMention', false)
    bodyFormData.append('location', 'string')
    bodyFormData.append('timestamp', new Date().toUTCString())


    const user = {
        email: "haha@haha.com",
        username: "haha",
        birthdate: "11-2-2000"
    }
  



  


    //   api.get('/tweets').then(res=>{
    //       console.log(res.data)
    //    })





    


    const composeTweet = () => {
        

        axios.post('/tweets', bodyFormData, {
            'Content-Type': 'multipart/form-data',
        }).then(function (res){
                console.log(res.data)
            }).catch(function name(err) {
                console.log(err)            
            })

}

return (
    <div>
        
        <BsTwitter style={{color:"#1da1f2",width:"50px",height:"50px"}}/>
        
        <button className='btn btn-outline-light rounded-pill
' onClick={composeTweet} onBlur={composeTweet}>click me</button>
    </div>
)
}
