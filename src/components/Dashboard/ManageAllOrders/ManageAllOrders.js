import React, { useEffect, useState } from 'react';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://calm-earth-69765.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data => {
            setOrders(data);
            // console.log(data);
        })
    },[orders])
    return (
        <div className="table-parent">
            <div className="table-container">
            <table class="table caption-top">
                <caption>All Orders</caption>
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
                        orders.map(order=> <ManageSingleOrder key={order._id} order={order}></ManageSingleOrder>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;