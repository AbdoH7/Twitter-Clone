// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const axios = require('axios').default
axios.defaults.baseURL = 'http://localhost:5001/twitterclonewebengineering/us-central1/App';
axios.defaults.headers['Access-Control-Allow-Origin'] = null
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdzSAEJIECvootrkcs_GghICqDKrTA9T4",
  authDomain: "twitterclonewebengineering.firebaseapp.com",
  projectId: "twitterclonewebengineering",
  storageBucket: "twitterclonewebengineering.appspot.com",
  messagingSenderId: "94639386575",
  appId: "1:94639386575:web:f1f3ed8ca3eac320092cba",
  measurementId: "G-7VMLEL7PBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



