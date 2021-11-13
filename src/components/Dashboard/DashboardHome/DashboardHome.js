import React from 'react';
import useAuth from '../../../hooks/useAuth';
import "./DashboardHome.css"

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div className="dashboard-home-parent">
            <h1 className="text-center text-light fw-bold p-5">Welcome to Your Dashboard , {user.displayName}! </h1>
            <p className="text-center text-muted fw-bold">All of Your accessibility at one place</p>
        </div>
    );
};

export default DashboardHome;