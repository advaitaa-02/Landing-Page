import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import signUpImg from '../images/Img.png.png'; 
import logo from '../images/Logo.png'; 
import './SignUp2.css';




const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [firstName, setFirstName] = useState('');
  // const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { signUp } = useUserAuth();
  let navigate = useNavigate();


  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/"); // after creating new user, redirect to login page
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
      
        <h2 className="heading">Sign Up To Flaxxi</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-2" controlId="formBasicUserType">
        <Form.Label></Form.Label>
        <Form.Control
          as="select"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="">Select user type</option>
          <option value="customer">Guardian</option>
          <option value="seller">Parent</option>
          <option value="admin">Student</option>
        </Form.Control>
      </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicFirstName">
            <Form.Control
              type="Name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

  {/* <Form.Group className="mb-2" controlId="formBasicMiddleName">
            <Form.Control
              type="Name"
              placeholder="Middle Name"
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </Form.Group> */}
      
      <Form.Group className="mb-2" controlId="formBasicLastName">
            <Form.Control
              type="Name"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
      
          <Form.Group className="mb-2" controlId="formBasicGender">
        <Form.Label>Gender:</Form.Label>
        <div className="gender-options">
          <Form.Check
            inline
            type="radio"
            label="Male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="gender"
            value="other"
            checked={gender === 'other'}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Prefer not to say"
            name="gender"
            value="prefer not to say"
            checked={gender === 'prefer not to say'}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPhoneNumber">
        <Form.Label></Form.Label>
        <div className="phone-input">
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </Form.Group>



          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div>
  <label>
    <input
      type="checkbox"
      checked={agreeToTerms}
      onChange={(e) => setAgreeToTerms(e.target.checked)}
      required
    />
    I agree to the terms and conditions
  </label>
  </div>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>

  </div>
  <div className='col-6'>
      <div className='img-container'>
  <img src={signUpImg}
  class="img-fluid" alt="Sample image"></img>
  </div>
  </div>

    </>
  );
};


export default Signup;