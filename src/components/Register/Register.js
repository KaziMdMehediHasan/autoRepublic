import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {registerUser,error, user, isLoading} = useAuth();
    console.log(user);
    // console.log(isLoading);
    const [registerData, setRegisterData] = useState({});

    const history = useHistory();

    const handleChange =(e)=>{
        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = {...registerData};

        newRegisterData[field] = value;

        setRegisterData(newRegisterData);
        console.log(registerData);

    }

    const handleRegister =(e)=>{
        if(registerData.password !== registerData.password2){
            alert("Mismatched Password");
        }else if(registerData.password.length < 6){
          alert("Password should be at least of 6 characters");
        }

        registerUser(registerData.name, registerData.email, registerData.password, history);
        console.log(registerData.email, registerData.password);
        e.preventDefault();
    }
    return (
        <div className="container">

        <h1>Register</h1>
        { 
        !isLoading &&(<form onSubmit={handleRegister}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input onChange={handleChange} name="name" placeholder="Your Name" type="text" class="form-control" aria-describedby="emailHelp"/>
         
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input onChange={handleChange} name="email" placeholder="Your Email" type="email" class="form-control" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input onChange={handleChange} name="password" placeholder="Password" type="password" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Confirm Password</label>
          <input onChange={handleChange} name="password2" placeholder="Re-type Password" type="password" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        <br/>
        <hr/>
      </form>)
        }
        {
          isLoading &&(<div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
        )
        }

        {
            user?.email && (<div class="alert alert-success" role="alert">
            Registration Successful!
          </div>)
        }
       
      <h1>{error}</h1>
      <Link to="/login">Already Registered? Click Here To Login</Link>
      </div>
    );
};

export default Register;