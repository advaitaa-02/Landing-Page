import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import logo from '../images/Logo.png'; 
import loginUpImg from '../images/Login.png';


function ForgotPassword() {
    const {passwordReset}  = useUserAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        //console.log(userAuth);
       await passwordReset(email);
         navigate('/'); // Redirect to the login page after password reset request
      } catch (err) {
        setError(err.message);
      }
    };
  

  return (
    <>
    <div className='col-4 '>
     
       <div className="p-4 box"> 
      <div classname="mb-1">
      <img src={logo}
  class="img-logo" alt="Sample image"></img>
      </div>
      <h2>Forgot Password</h2>
     
        <Form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Reset Password
            </Button>
          </div>
        </Form>
        <hr/>
        </div>
        </div>
        <div className='col-6'>
      <div className='img-container'>
  <img src={loginUpImg}
  class="img-fluid" alt="Sample image"></img>
  </div>
  </div>
    
  </>
  );
}

export default ForgotPassword;
