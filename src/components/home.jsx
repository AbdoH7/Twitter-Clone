import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TweetBlock from './tweet-block'

export default function Home() {
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        axios.get('https://us-central1-twitterclonewebengineering.cloudfunctions.net/App/tweets').then(res => {
            const data = res.data
            console.log(data)
            data?.map((d) => setTweets(tweets => [...tweets, {
                id: d.id,
                handle: d.userId,
                user: d.name,
                content: d.text,
                date: d.timestamp
            }]))



        })

    }, [])


    return (
        <div>
            {tweets.map((t) => (<TweetBlock tweet={t} />))}

        </div>
    )
}
