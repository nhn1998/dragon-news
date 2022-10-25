import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../../context/AuthProvider';
const Register = () => {
    const { createUser, updateProfileForm } = useContext(authContext)
    const HandleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const PhotoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, PhotoURL)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                HandleUpdateProfile()

            })
            .catch(err => console.log(err))
    }
    const HandleUpdateProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateProfileForm(profile)
            .then(() => { })
            .catch((error) => console.log(error))
    }
    return (
        <Form onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register; <h1>this is register</h1>