import './OwnerLogin.css'
import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Login({ setOwner }: { setOwner: any }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongCreds, setWrongCreds] = useState(false);
    const navigate = useNavigate();

    // This function gets called when user clicks on Login button
    const getFormData = (e: any) => {
        e.preventDefault();
        Axios.post('https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/ownerLogin', {
            username: username,
            password: password
        }).then((response) => {
            console.log(response.data)
            if (response.data.response) {
                setOwner(response.data.data[0])
                navigate("/owner");
            } else {
                setWrongCreds(true);
            }
        })
    }

    return (
        <div className='Login'>
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
                <h4>Owner Login <span id="space-up">Not an Owner? </span>
                    <Link to="/ownerSignup"><Button variant="custom">Signup</Button></Link> </h4>
                {wrongCreds ? <p style={{ color: "red" }}>Wrong username or password</p> : ""}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Name" autoFocus required onChange={(event) => {
                            setUsername(event.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="custom" type="submit" size="lg" onClick={(e) => getFormData(e)}>
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="side-img-owner">
            </div>
        </div>
    );
}

export default Login;
