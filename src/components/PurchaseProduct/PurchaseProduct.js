import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import "./PurchaseProduct.css";

const PurchaseProduct = () => {
    const { register, handleSubmit } = useForm();
    const [product , setProduct] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
            console.log(data);
        });
    },[])

    const onSubmit = (formData, e) => {

        const orderData = {...formData, product}
        console.log(orderData);
    }
    return (
        <div className="bg-dark purchase-parent">
            <h1 className="text-center text-light">About <span className="title">{product.carName}</span></h1>
            <div className="product-details mx-auto my-5">
                <div className="product-img">
                    <img src={product.img_url} alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="title">{product.carName}</h2>
                    <h5>Manufacturer : {product.carBrand}</h5>
                    <h5>Manufacturing Year : {product.year}</h5>
                    <p><b>Summary of the Car</b> : {product.description}</p>
                    <p><b>Guaranteed Run</b> : {product.mileage} KM</p>
                    <p><b>Base Price : </b>${product.price}</p>
                </div>
            </div>
            <h1 className="text-center title">Buy Now</h1>
            <div className="purchase-form-parent shadow-lg mt-5">
          <div>
            <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true })}
                placeholder="Purchase Name"
              />
              <hr />
              <input
                {...register("address", { required: true })}
                placeholder="Customer Address"
              />
              <hr />
              <input  {...register("email")} placeholder="Purchase Email" />
              <hr />
              <textarea {...register("contact")} placeholder="Phone Number" />
              <hr />
              <input className="submit" type="submit"/>
            </form>
          </div>
        </div>
        </div>
    );
};

export default PurchaseProduct;