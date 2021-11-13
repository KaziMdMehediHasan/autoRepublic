import React, { useState } from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import "./Login.css";

const Login = () => {
  const{loginWithGoogle,error, user,loginWithEmail, isLoading} = useAuth();

  const location = useLocation();
  const history = useHistory();

  const [loginData, setLoginData] = useState({});
  const handleChange =e=>{
    const field = e.target.name;
    const value = e.target.value;

    const newRegisterData = {...loginData};

    newRegisterData[field] = value;

    setLoginData(newRegisterData);


    console.log(loginData);
  }

  const handleEmailLogin=e=>{
    loginWithEmail(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }

  const handleGoogleLogin =()=>{
    loginWithGoogle(location, history);
  }
    return (
      <div>
        <NavigationBar></NavigationBar>
          <div className="container">
            <h1 className="my-5">Login</h1>
            {
              !isLoading &&         
              <form onSubmit={handleEmailLogin}>
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input onChange={handleChange} name="email" placeholder="Your Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input onChange={handleChange} name="password" placeholder="Password" type="password" class="form-control" />
              </div>
          
              <button type="submit" class="btn btn-primary">Login</button>
              <br/>
              <hr/>
            </form>
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
              Login successful!
            </div>)
            }

            {
              error && (<div class="alert alert-danger" role="alert">
                {error}
            </div>)
            }

          <button class="btn btn-primary"onClick={handleGoogleLogin}>Google Login</button>
          <br/>

          <Link to="/register">No Account? Click Here To Register</Link>
          <h1>{error}</h1>
          </div>
      <div className="login-foot">
         <Footer></Footer>
      </div>
          
      </div>
    );
};

export default Login;