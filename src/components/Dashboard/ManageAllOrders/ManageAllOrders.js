import React, { useEffect, useState } from 'react';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data => {
            setOrders(data);
            // console.log(data);
        })
    },[orders])
    return (
        <div className="p-5">
            <div className="product-container container">
            <table class="table caption-top">
                <caption>All Products</caption>
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
                        orders.map(order=> <ManageSingleOrder key={order._id} order={order}></ManageSingleOrder>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;