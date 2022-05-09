import React from 'react'
import './SignUp.css'
import { Form, Button } from 'react-bootstrap'
function SingUp() {
  return (
    <section className="h-100 gradient-form" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">

                      <h4 className="mt-1 mb-5 pb-1">Sign Up</h4>
                    </div>

                    <Form>
                      <p>Please make your account</p>
                      <label className="form-label" >Name</label>
                      <div className="form-outline mb-4">
                        <input type="text" className="form-control" placeholder="Name" required />

                      </div>
                      <label className="form-label" >Username</label>
                      <div className="form-outline mb-4">
                        <input type="text" className="form-control" placeholder="Username" required />

                      </div>
                      <label className="form-label" >Email</label>
                      <div className="form-outline mb-4">
                        <input type="email" className="form-control" placeholder="Email" required />

                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" >Password</label>
                        <input type="password" className="form-control" placeholder="Password" required />

                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" >Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password" required />

                      </div>
                      <label className="form-label" >Contact no.</label>
                      <div className="form-outline mb-4">
                        <input type="tel" className="form-control" placeholder="Contact" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />

                      </div>
                      <label className="form-label" >Organization email</label>
                      <div className="form-outline mb-4">
                        <input type="email" className="form-control" placeholder="Org. email" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />

                      </div>
                      <label className="form-label" >Date of Birth</label>
                      <div className="form-outline mb-4">
                        <input type="date" className="form-control" placeholder="dob" required />

                      </div>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='check' type="checkbox" label="Agree to term and condition" />
                      </Form.Group>
                      <div className="text-center1 pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">SignUp</button>

                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Have an account?</p>
                        <button type="button" className="btn  btn-block " ><a href='' >Login</a></button>
                      </div>

                    </Form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center  ">
                  <img className='images2' src="/Images/bagimage.jpg" alt='image' />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SingUp