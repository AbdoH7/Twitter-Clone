import React from 'react'
import '../../styles/loginPage.css'
import { UserContext } from "../../Contexts/userContext";
import { useContext } from 'react';
import { Form } from 'react-bootstrap'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"

 
const auth = getAuth()
const axios = require('axios').default

const SignInForm = () => {
    
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
            console.log("Signed In")
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
            const context = {
                id:data.id,
                Name:data.name,
                handle:data.username,
                tweetsNo: data.tweetsNo,
                POB:"Alexandria, Egypt",
                POB_Statue: true,
                DOB: data.birthdate,
                DOB_Statue: true,
                DOJ: data.creationDate,
                ProfilePic: data.avatar || 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/default-avatar.png?alt=media&token=7cb1d4bd-3672-4e2f-ae18-9d2fadb7c0a8',
                CoverPic: data.coverPhoto || 'https://firebasestorage.googleapis.com/v0/b/twitterclonewebengineering.appspot.com/o/defCover.jpeg?alt=media&token=c1f0ccdb-dd31-41b0-9b12-c09a7f5c2a25',
                followersNO:data.followers,
                followingNO: data.following,
                isLogged:true
            }
            localStorage.setItem('context',JSON.stringify(context))
            setUser(context)
            
        
            // user object in response.data
            //redirecting code after signing in
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.stack)
        });

    

        
        

    };
    

    

    return (                          
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
    )
}

const btnContainer = {
    display:"flex",
    justifyContent:"center"
}

export default SignInForm
