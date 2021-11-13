import React from 'react';
import useAuth from '../../../hooks/useAuth';
import "./DashboardHome.css"

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div className="dashboard-home-parent">
            <h1 className="text-center text-light p-5">Welcome to Your Dashboard , {user.displayName}! </h1>
        </div>
    );
};

export default DashboardHome;