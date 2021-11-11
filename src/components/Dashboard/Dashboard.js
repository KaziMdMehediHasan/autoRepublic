import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import "./Dashboard.css";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllProducts from './ManageAllProducts/ManageAllProducts';
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const{admin} = useAuth();
    return (
        <div className="dashboard-container">
        <div className="dashboard-sidebar">
            <h1>Dashboard Sidebar</h1>
            {/* links*/}
                <ul>
                    {/* home route */}
                    <li className="nav-link">
                    <Link to={`${url}`}>Dashboard Home</Link> 
                    </li>
                    <li className="nav-link">
                    <Link to={`${url}/myOrders`}>My Orders</Link> 
                    </li>
                    <li className="nav-link">
                    <Link to={`${url}/review`}>Leave a Review</Link>
                    </li>
                    {
                        admin && (
                                <li className="nav-link">
                                <Link to={`${url}/manageProducts`}>Manage All Products</Link>
                                </li>
                        )
                    }
                    {
                        admin && (
                            <li className="nav-link">
                            <Link to={`${url}/makeAdmin`}>Make an Admin</Link>
                         </li>
                        )
                    }
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
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageAllProducts></ManageAllProducts>
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