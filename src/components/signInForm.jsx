import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
const auth = getAuth()
const axios = require('axios').default

const SignInForm = () => {
    

    const handleSubmit = (event) => {  

        event.preventDefault();
        const form = event.target;

        
        const email = form.email.value 
        const password = form.password.value
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
            console.log(response.data)
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
        <Form noValidate  onSubmit={handleSubmit}>
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
