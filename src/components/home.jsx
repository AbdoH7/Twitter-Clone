import React from 'react'
import axios from 'axios'


const api = axios.create({
    baseURL: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App'
})
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
    bodyFormData.append('text', 'string123')
    bodyFormData.append('userId', 'string')
    bodyFormData.append('hasMedia', false)
    bodyFormData.append('mediaType',4)
    bodyFormData.append('hasMention',false)
    bodyFormData.append('location','string')
    bodyFormData.append('timeStamp',10)
    const user = {
        email: "haha@haha.com",
        username: "haha",
        birthdate: "11-2-2000"
    }
    // const composeTweet = async () => {
    //     const res = await fetch('https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweets', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             //'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(tweet)
    //     })
    //     const data = await res.json();
    //     console.log("doneeee")
    //     console.log(data)


    // }




    // const composeTweet = () => {
    //     fetch('https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweets', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'multipart/form-data',
    //         },
    //         body: JSON.stringify(tweet)


    //     })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });


    //}







    //const composeTweet =() =>{
    //     api.get('/tweets').then(res=>{
    //         console.log(res.data)
    //     })
    // }

    // const composeTweet = async () => {
    //     const res = await api.post('/tweets',tweet)
    // const data = await res.json();
    //     console.log("doneeee")
    //     console.log(data)
    // }

      const composeTweet = () =>{
    // axios.post('https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/user', user)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });





        api.get('/tweets').then(res=>{
             console.log(res.data)
         })





    // axios.post( 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweets', tweet )
    }



    // const composeTweet = () => {
    //     axios({
    //         method: "post",
    //         url: 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweets',
    //         data: bodyFormData,
    //         headers:{"Content-Type": "multipart/form-data"}
    //     }).then(function (res){
    //         console.log(res)
    //     }).catch(function name(err) {
    //         console.log(err)            
    //     })
    // }

    return (
        <div>
            <button onClick={composeTweet} onBlur={composeTweet}>click me</button>
        </div>
    )
}
