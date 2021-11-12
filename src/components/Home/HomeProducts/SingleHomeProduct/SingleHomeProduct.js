import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleHomeProduct.css"

const SingleHomeProduct = (props) => {
    const {_id, carBrand, carName, description, img_url, price} = props.product;
    return (
        <div className="home-custom-card">
            <div className="home-card-image">
                <img src={img_url} alt=""/>
            </div>
            <div className="card-text">
                <h5>{carName}</h5>
                <p>by <b>{carBrand}</b></p>
                <p>{description.slice(0,50)}...</p>
                <p>Base Price : <b>${price}</b></p>
                <Link to={`/purchaseProduct/${_id}`}>
                    <button className="btn btn-info">Buy Now</button>
                </Link>
          
            </div>
        </div>
    );
};

export default SingleHomeProduct;