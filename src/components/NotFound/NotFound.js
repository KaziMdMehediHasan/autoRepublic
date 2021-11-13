import React from 'react';
import { Link } from 'react-router-dom';

import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="notFound">
            <Link to="/">
              <button className="btn btn-warning home-btn">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;