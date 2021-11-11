import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from "../../logo.png";
import './NavigationBar.css';

const NavigationBar = () => {

  const {user,logOut, admin} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="branding">
            <Link to="/home" className="navbar-brand">
                <img src={logo} alt="logo" /><span>AutoRepublic</span>
            </Link>
            </div>

            <div>
                {/* nav list div */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/home' className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/allProducts' className="nav-link" aria-current="page">Explore</Link>
              </li>
              {
                user?.email && admin ? (
                  <li className="nav-item">
                  <Link to="/addService" className="nav-link" >Add Product</Link>
                </li>
                ) : ""
              }
              {
                user?.email && (
                  <li className="nav-item">
                  <Link to="/dashboard" className="nav-link" >Dashboard</Link>
                </li>
                )
              }

              <li className="nav-item nav-link fw-bold">{user.displayName||user.email}</li>
              {
                user?.displayName || user?.email ? <button onClick={logOut} class="btn btn-danger">Logout</button> :  <li class="nav-item">
                <Link to="/login" class="nav-link">Login</Link>
              </li>
              }
            </ul>
          </div>
                
            </div>

        </div>
      </nav>
      
    );
};

export default NavigationBar;