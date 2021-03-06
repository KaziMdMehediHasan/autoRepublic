import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from './SingleOrder/SingleOrder';
import "./MyOrders.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const MyOrders = () => {
    const[orders, setOrders] = useState([]);
    const {user} = useAuth();
    const email = user.email;

    useEffect(()=>{
        fetch(`https://calm-earth-69765.herokuapp.com/orders/${email}`)
        .then(res=>res.json())
        .then(data => {
            setOrders(data);
            // console.log(data)
        })
    },[orders])


            // animation on scroll
            useEffect(() =>{
                Aos.init({duration : 1000});
              },[]);

    return (
        <div className="table-parent">
            <div data-aos="fade-up" className="table-container">
            <table class="table caption-top">
                <caption className="fw-bold">My Orders</caption>
                <thead className="table-head">
                    <tr className="table-row">
                    <th className="text-light" scope="col">Car</th>
                    <th className="text-light" scope="col">Price</th>
                    <th className="text-light" scope="col">Customer Name</th>
                    <th className="text-light" scope="col">Address</th>
                    <th className="text-light" scope="col">Contact No</th>
                    <th className="text-light" scope="col">Status</th>
                    <th className="text-light" scope="col">Action</th>
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