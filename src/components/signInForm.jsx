import React from 'react'
import '../styles/loginPage.css'
import { UserContext } from "../Contexts/userContext";
import { useContext } from 'react';
import { Form ,Button} from 'react-bootstrap'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import zIndex from '@mui/material/styles/zIndex'
import { positions } from '@mui/system'
const auth = getAuth()
const axios = require('axios').default

const SignInForm = (props) => {
    
    const [user, setUser] = useContext(UserContext);
    const handleSubmit = (event) => {  
        event.preventDefault();
        const form = event.target;
        
        
        const email = form.email.value 
        const password = form.password.value

        form.email.value = ""
        form.password.value = ""
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return auth.currentUser.getIdToken(false)

            // ...
        }).then((token) => {
            
            window.localStorage.setItem('username',auth.currentUser.displayName)
            window.localStorage.setItem('token',token)
            axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
        })
        .then(()=>{

            return axios.get('/user/'+localStorage.getItem("username"))
            
        })
        .then((response)=> {
            const data = response.data
            console.log("response:"+ data.name)
            setUser({
                Name:data.name,
                handle:data.username,
                tweetsNo: data.tweetsNo,
                POB:"Alexandria, Egypt",
                POB_Statue: true,
                DOB: data.birthdate,
                DOB_Statue: true,
                DOJ: data.creationDate,
                ProfilePic: data.avatar,
                CoverPic: data.coverPhoto,
                followersNO:data.followers,
                followingNO: data.following,
                isLogged:true
            })
            
        
            // user object in response.data
            //redirecting code after signing in
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });

    

        
        

    };
    

    

    return (
        <div >                           
            <Form noValidate style={{borderRadius:"4%"}} className="form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="text" placeholder="Email"/>
                    <Form.Control.Feedback type="invalid">
                        Invalid
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter Password"/>
                
                </Form.Group>
                <div style={btnContainer}>
                    <button className="btn-outline-light rounded-pill gBtn" type="submit" >Sign In</button>
                </div>
            </Form> 
        </div> 
    )
}

const btnContainer = {
    display:"flex",
    justifyContent:"center"
}

export default SignInForm
