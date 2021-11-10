import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.png";
import './NavigationBar.css';

const NavigationBar = () => {
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
                <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/addService" className="nav-link" href="#">Add Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
              </li>
            </ul>
          </div>
                
            </div>

        </div>
      </nav>
      
    );
};

export default NavigationBar;