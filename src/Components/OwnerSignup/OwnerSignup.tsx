import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'
import './OwnerSignup.css';

function OwnerSignup() {

    // Fields to be filled in owner signup form
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [contact, setContact] = useState("");
    const [bio, setBio] = useState("");

    // Function for posting owner details
    const getFormData = (e: any) => {
        e.preventDefault();
        const url = "https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/owners/create";
        const data = {
            username: username,
            password: password,
            name: name,
            email: email,
            dob: dob,
            contact: contact,
            bio: bio
        };
        Axios.post(url, data).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <div className='OwnerSignup'>
            <style>
                {`
                    .btn-custom {
                    background-color: rgb(0, 86, 145);
                    color: white;
                    }

                    .btn-custom:hover {
                    color:white;
                    }
                `}
            </style>
            <div className="form-container">
                <h4>Owner Sign Up <span id="space-up">Already an owner? </span>
                    <Link to="/ownerLogin"><Button variant="custom">Login</Button></Link> </h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" autoFocus required onChange={(event) => {
                            setName(event.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" required onChange={(event) => {
                            setUsername(event.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" placeholder="Contact number" required onChange={(event) => {
                            setContact(event.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDob">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="DD-MM-YY" required onChange={(event) => {
                            setDob(event.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control type="textarea" placeholder="About yourself" required onChange={(event) => { setBio(event.target.value) }} />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="custom" type="submit" size="lg" onClick={(e) => getFormData(e)}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="side-img-owner">
            </div>
        </div>
    )
}

export default OwnerSignup;
