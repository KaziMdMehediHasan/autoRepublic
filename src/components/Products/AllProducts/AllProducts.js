import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/NavigationBar';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch("https://calm-earth-69765.herokuapp.com/products")
        .then(res=>res.json())
        .then(data => {
            setProducts(data);
            console.log(data);
        })
    },[])
    return (
        <div>
        <NavigationBar></NavigationBar>
        <div className="product-parent p-5">
            <div className="product-container container">
            {
                products.map(product =><SingleProduct key={product._id} product={product}></SingleProduct>)
            }
            </div>
        </div>
        <Footer></Footer>
        </div>

    );
};

export default AllProducts;