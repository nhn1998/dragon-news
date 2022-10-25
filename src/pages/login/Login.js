import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';
const Login = () => {
    const [error,setError]=useState('')
    const {signIn}=useContext(authContext)
    const navigate=useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const HandleClick=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            setError('')
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.log(err)
            setError(err.message)
        })
    };
    return (
        <Form onSubmit={HandleClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p className='text-danger'>{error}</p>
        </Form>
    );
};

export default Login;