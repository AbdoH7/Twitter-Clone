import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../Images/loginBg.png'
import { useState } from 'react';
import SignInForm from './signInForm';
import '../styles/loginPage.css'
import {twitter} from '../scripts/icons'
const NewloginPage = () => {

    const renderSignUp = () => {
        setLogin(false)
    }
    const renderSignIn = () => {
        setLogin(true)
    }

    const [login,setLogin] = useState(true)
    return (
        <div className="page">
            <img src ={image}/> 
            <div className="portal">
                <div id="logo">{twitter}</div>
                <h1>Happening now</h1>
                <h2>Join Twitter today.</h2>
                <button className="gBtn">Sign In</button>
                <h6>Already have an account?</h6>
                <button className= "gBtn">Sign Up</button>
            </div>
        </div>
       
    )

}




const pageStyle = {
    display:"flex",
    width:"100vw",
    height:"100vh",
}

const imageStyle = {
    width:"50vw",
    height:"100vh"
}

const portalStyle ={
    backgroundColor:"white",
    width:"50vw",
    height:"100vh"
}


export default NewloginPage
