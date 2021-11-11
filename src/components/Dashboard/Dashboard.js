import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import "./Dashboard.css";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Review from './Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="dashboard-container">
        <div className="dashboard-sidebar">
            <h1>Dashboard Sidebar</h1>
            {/* links*/}
                <ul>
                    {/* home route */}
                    <li>
                    <Link to={`${url}`}>Dashboard Home</Link> 
                    </li>
                    <li>
                    <Link to={`${url}/review`}>Leave a Review</Link>
                    </li>
                    <li>
                    <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                    </li>
                </ul>
            {/*end of links*/}
             
        </div>
        <div className="dashboard-body">
            <h1>Dashboard Body</h1>
            <Switch>
                    {/* home route */}
                    <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
        </div>
        </div>
    );
};

export default Dashboard;