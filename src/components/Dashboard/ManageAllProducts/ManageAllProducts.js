import React, { useEffect, useState } from 'react';
import ManageSingle from './ManageSingle/ManageSingle';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data => {
            setProducts(data);
            // console.log(data);
        })
    },[products])
    return (
        <div className="p-5">
            <div className="product-container container">
            <table class="table caption-top">
                <caption>My Orders</caption>
                <thead>
                    <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Year of Release</th>
                    <th scope="col">Mileage</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=> <ManageSingle key={product._id} product={product}></ManageSingle>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProducts;