import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import "./Dashboard.css";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './ManageAllProducts/ManageAllProducts';
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import UpdateOrder from './UpdateOrder/UpdateOrder';
import UpdateProduct from './UpdateProduct/UpdateProduct';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const{admin} = useAuth();
    return (
        <div className="dashboard-container">
        <div className="dashboard-sidebar p-5">
            <h1 className="text-center">Dashboard Menu</h1>
            {/* links*/}
                <ul className="navbar-nav">
                    {/* home route */}
                    <li className="nav-item fw-bold">
                    <Link className="nav-link text-dark" to={`${url}`}>Dashboard Home</Link> 
                    </li>
                    <li className="nav-item fw-bold">
                    <Link className="nav-link text-dark" to={`${url}/myOrders`}>My Orders</Link> 
                    </li>
                    <li className="nav-item fw-bold">
                    <Link className="nav-link text-dark" to={`${url}/review`}>Leave a Review</Link>
                    </li>
                    {
                        admin && (
                                <li className="nav-item fw-bold">
                                <Link className="nav-link text-dark" to={`${url}/manageProducts`}>Manage All Products</Link>
                                </li>
                        )
                    }
                    {
                        admin && (
                                <li className="nav-item fw-bold">
                                <Link className="nav-link text-dark" to={`${url}/manageOrders`}>Manage All  Orders</Link>
                                </li>
                        )
                    }
                    {
                        admin && (
                            <li className="nav-item fw-bold">
                            <Link className="nav-link text-dark" to={`${url}/makeAdmin`}>Make an Admin</Link>
                         </li>
                        )
                    }
                </ul>
            {/*end of links*/}
             
        </div>
        <div className="dashboard-body">
            <Switch>
                    {/* home route */}
                    <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/updateProduct/:id`}>
                        <UpdateProduct></UpdateProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/updateOrder/:id`}>
                        <UpdateOrder></UpdateOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
        </div>
        </div>
    );
};

export default Dashboard;