import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./SingleProduct.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SingleProduct = (props) => {
    const {_id, carBrand, carName, description, img_url, price} = props.product;

    useEffect(() =>{
        Aos.init({duration : 1000});
    },[]);
    return (
        <div data-aos="fade-up" className="custom-card">
            <div className="card-image">
                <img src={img_url} alt=""/>
            </div>
            <div className="card-text">
                <h5>{carName}</h5>
                <p>by <b>{carBrand}</b></p>
                <p>{description.slice(0,100)}...</p>
                <p>Base Price : <b>${price}</b></p>
                <Link to={`/purchaseProduct/${_id}`}>
                    <button className="btn btn-info">Buy Now</button>
                </Link>
          
            </div>
        </div>
    );
};

export default SingleProduct;