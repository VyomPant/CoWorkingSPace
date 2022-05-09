import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './ForgotPass.css'
function ForgotPass() {
  return (


    <Form  className='forgotpasspage'>
      <h3><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-lock-fill " viewBox="0 0 16 16">
           <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
         </svg></h3>
         <h2 className="text-center">Forgot Password?</h2>
          <p className='reset'>You can reset your password here.</p>
     <h6 className='getpass'>Create New Password :</h6>
     <Form.Group className="mb-3" controlId="" >
    <Form.Label className='usrname'>Username</Form.Label>
    <Form.Control className="username1" type="text" placeholder="username"  required/>
  </Form.Group>
   <Form.Group  className="mb-3" controlId="formPlaintextPassword">
  <Form.Label className='newpass' >
    New Password
    </Form.Label>
  <Form.Control className="pass1" type="password" placeholder="Password" required/>
    
  </Form.Group>
   <Form.Group  className="mb-3" controlId="formPlaintextPassword">
    <Form.Label className='confnewpass'>
      Confirm New Password
     </Form.Label>
    <Form.Control className="confirmpass1" type="password" placeholder="Confirm Password" required />
  </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className='check' type="checkbox" label="Please check to create new password" />
 </Form.Group>
   <Button className='button' variant="primary" type="submit">
    Set Password
   </Button>
   
   <div className="col-lg-6 d-flex align-items-center  ">
       <img className='images1' src="/Images/bagimage.jpg" alt='image'/>
              
      </div>
      </Form>
  )
}

export default ForgotPass