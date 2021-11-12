import React, { useEffect, useState } from 'react';
import ManageSingle from './ManageSingle/ManageSingle';
import './ManageAllProducts.css';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://calm-earth-69765.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => {
            setProducts(data);
            // console.log(data);
        })
    },[products])
    return (
        <div className="table-parent">
            <div className="table-container">
            <table class="table caption-top">
                <caption>All Products</caption>
                <thead className="table-head">
                    <tr className="table-row">
                    <th className="text-light" scope="col">Model</th>
                    <th className="text-light" scope="col">Price</th>
                    <th className="text-light" scope="col">Brand</th>
                    <th className="text-light" scope="col">Year of Release</th>
                    <th className="text-light" scope="col">Mileage</th>
                    <th className="text-light" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="">
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