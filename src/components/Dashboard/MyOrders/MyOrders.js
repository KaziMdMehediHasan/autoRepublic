import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from './SingleOrder/SingleOrder';
import "./MyOrders.css";

const MyOrders = () => {
    const[orders, setOrders] = useState([]);
    const {user} = useAuth();
    const email = user.email;

    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${email}`)
        .then(res=>res.json())
        .then(data => {
            setOrders(data);
            // console.log(data)
        })
    },[orders])

    return (
        <div className="p-5">
            <div className="product-container container">
            <table class="table caption-top">
                <caption>My Orders</caption>
                <thead>
                    <tr>
                    <th scope="col">Car</th>
                    <th scope="col">Price</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=> <SingleOrder key={order._id} order={order}></SingleOrder>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;