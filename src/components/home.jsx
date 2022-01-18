import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TweetBlock from './tweet-block'
import { UserContext } from '../Contexts/userContext'
import { useContext } from 'react'

export default function Home() {
    const [tweets, setTweets] = useState([])
    const [profile,setProfile] = useContext(UserContext)
    useEffect(() => {
        axios.get('https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweets/'+profile.id).then(res => {
            const data = res.data
            console.log(res)
            data?.map((d) => setTweets(tweets => [...tweets, {
                id: d.tweet.id,
                handle: d.tweet.userId,
                user: d.tweet.name,
                content: d.tweet.text,
                date: d.tweet.timestamp,
                name: d.user.name,
                avatar: d.user.avatar
            }]))



        })

    }, [])


    return (
        <div>
            {tweets.map((t) => (<TweetBlock tweet={t} />))}

        </div>
    )
}
