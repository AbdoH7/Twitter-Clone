import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,updateProfile,connectAuthEmulator } from "firebase/auth";
const auth = getAuth()
//connectAuthEmulator(auth, "http://localhost:9099"); //for testing with emulators
const axios = require('axios').default
const SignUpForm = () => {

    const[inputsChecker,setInputCheckers] = useState({
        email:true,
        password:true,
        username:true,
        birthdate:true,
    })


    const checkValidity = (form) => {
        const email=form.email.value.length>5
        const password=form.password.value.length>7
        const username = form.username.value.length>5
        const birthdate = true
        console.log(form.birthdate.value)
        setInputCheckers ( {
            email,
            password,
            username,
            birthdate
        })
        return email && password && username && birthdate
        
    }

    const handleSubmit = (event) => {  
        
        event.preventDefault();
        const form = event.target;
        if (!checkValidity(form)) {
            event.stopPropagation();
            return
        }
        
        const email = form.email.value
        const password = form.password.value
        const username = form.username.value
        const birthdate = form.birthdate.value
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return updateProfile(auth.currentUser, {displayName:username})
            
        })
        .then(() => {
            return auth.currentUser.getIdToken()
        })
        .then((token) => {
            localStorage.setItem('token',token)
            localStorage.setItem('username',username)
            axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token')
            console.log('Account created...')
        })
        .then(() => {
            const body = new FormData()
            body.append('email',email)
            body.append('birthdate',birthdate)
            body.append('username',username)
            const headers = {
                'Content-Type': 'multipart/form-data',
              }
            return axios.post('/user',body,{headers})
        })
        .then((response)=> {
            //render to home or profile
            console.log(response)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ": " + errorMessage)
        });

        
        

    };
    return (
        <Form noValidate  onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control required isInvalid={!inputsChecker.email} type="text" placeholder="Email"/>
                <Form.Control.Feedback type="invalid">
                    Invalid
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required isInvalid={!inputsChecker.password} type="password" placeholder="Enter Password"/>
                <Form.Control.Feedback type="invalid">
                    short password, minimum 8 characters
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>username</Form.Label>
                <Form.Control required isInvalid={!inputsChecker.username} type="text" placeholder="Enter username"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="birthdate">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control required isInvalid={!inputsChecker.birthdate} type="date"/>
            </Form.Group>
            
            <div style={btnContainer}>
                <Button id="twitterBtn" variant="primary" type="submit" style={{width:"30%"}}>Sign Up</Button>
            </div>
        </Form>
    )
}
const btnContainer = {
    display:"flex",
    justifyContent:"center"
}

export default SignUpForm
