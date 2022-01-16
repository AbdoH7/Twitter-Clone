import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
require('../config')
const auth = getAuth()
const axios = require('axios').default
axios.defaults.baseURL = 'https://us-central1-twitterclonewebengineering.cloudfunctions.net/App';
const SignInForm = () => {
    
    const[inputsChecker,setInputCheckers] = useState({
        email:true,
        password:true,
    })

    const handleSubmit = (event) => {   

        const form = event.target;
        console.log(checkValidity(form))
        if (!checkValidity(form)) {
            event.preventDefault();
            event.stopPropagation();
        }
        const email = form.email.value 
        const password = form.password.value
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            auth.currentUser.getIdToken(false).then((token) => {
                axios.defaults.headers.common['Authorization'] = token;
            })

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode+ ":" + errorMessage)
        });
        

    };
    
     
    const checkValidity = (form) => {
        const email=form.email.value>5
        const password=form.password.value>6

        setInputCheckers ( {
            email,
            password
        })
        return email && password
        
    }

    

    return (
        <Form noValidate  onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control required  isInvalid={!inputsChecker.email} type="text" placeholder="Email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required isInvalid={!inputsChecker.password}type="password" placeholder="Enter Password"/>
            </Form.Group>
            <div style={btnContainer}>
                <Button id="twitterBtn" variant="primary" type="submit" style={{width:"30%"}}>Sign In</Button>
            </div>
        </Form> 
    )
}

const btnContainer = {
    display:"flex",
    justifyContent:"center"
}

export default SignInForm
