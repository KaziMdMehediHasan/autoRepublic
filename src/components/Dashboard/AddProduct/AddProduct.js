import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "./AddProduct.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        // send req to the server

        fetch("https://calm-earth-69765.herokuapp.com/products",{
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=> {
          if(data.insertedId){
            alert("Product Added successfully!")
          }
        });

        e.target.reset();
    }

        // animation on scroll

        useEffect(() =>{
          Aos.init({duration : 1000});
        },[]);

    return (
        <div data-aos="fade-right" className="pb-5">
        <h1 className="text-center text-light p-5">Add a New Product</h1>
        <div className="add-product-parent shadow-lg">
          <div>
            <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("carName", { required: true })}
                placeholder="Car Name"
              />
              <hr />
              <input
                {...register("carBrand", { required: true })}
                placeholder="Brand"
              />
              <hr />
              <input
                {...register("year", { required: true })}
                placeholder="Release Year"
              />
              <hr />
              <input  {...register("mileage")} placeholder="Mileage" />
              <hr />
              <textarea {...register("description")} placeholder="Description" />
              <hr />
              <input {...register("img_url")} placeholder="Image URL" />
              <hr />
              <input  {...register("price")} placeholder="Price" />
              <hr />
            <input className="submit" type="submit"/>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;