import React, { useEffect, useState } from 'react';
import SingleHomeProduct from './SingleHomeProduct/SingleHomeProduct';
import "./HomeProducts.css";

const HomeProducts = () => {
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
        <div className="home-card-parent p-5">
            <h1 className="text-center mb-5" style={{color: '#C8C8C8'}}>We Offer The best Cars</h1>
            <div className="home-product-container container">
            {
                products.slice(0,6).map(product =><SingleHomeProduct key={product._id} product={product}></SingleHomeProduct>)
            }
            </div>

        </div>
    );
};

export default HomeProducts;