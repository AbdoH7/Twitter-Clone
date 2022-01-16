import React from 'react'
import {Form,Button} from 'react-bootstrap'

const SignUpForm = () => {
    return (
        <Form noValidate>
            <Form.Group className="mb-3 " controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="text" placeholder="Email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Enter Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>username</Form.Label>
                <Form.Control required type="text" placeholder="Enter username"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="birthdate">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control required type="date"/>
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
