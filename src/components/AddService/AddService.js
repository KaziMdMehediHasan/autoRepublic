import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        // send req to the server

        fetch("http://localhost:5000/products",{
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
    return (
        <div className="pb-5 body">
        <h1 className="text-center text-light p-5">Add a New Product</h1>
        <div className="add-service-parent shadow-lg">
          <div>
            <form className="add-service-form" onSubmit={handleSubmit(onSubmit)}>
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
            <button  className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddService;