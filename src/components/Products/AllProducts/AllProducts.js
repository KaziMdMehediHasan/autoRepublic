import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data => {
            setProducts(data);
            console.log(data);
        })
    },[])
    return (
        <div className="product-parent p-5">
            <div className="product-container container">
            {
                products.map(product =><SingleProduct key={product._id} product={product}></SingleProduct>)
            }
            </div>

        </div>
    );
};

export default AllProducts;