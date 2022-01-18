// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const axios = require('axios').default
const fs = require('fs')
axios.defaults.baseURL = 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = JSON.parse(fs.readFileSync('./config.json').toString())
// Initialize Firebase
const app = initializeApp(firebaseConfig);



