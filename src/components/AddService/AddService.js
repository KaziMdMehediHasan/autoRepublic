import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
    }
    return (
        <div className="p-5 body">
        <h1 className="text-center text-light p-5">Add New Service</h1>
        <div className="add-service-parent shadow-lg">
          <div>
            <form className="add-service-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("carName", { required: true })}
                placeholder="Car Name"
              />
              <hr />
              <input type="number" {...register("mileage")} placeholder="Mileage" />
              <hr />
              <textarea {...register("description")} placeholder="Description" />
              <hr />
              <input {...register("img_url")} placeholder="Image URL" />
              <hr />
              <input type="number" {...register("price")} placeholder="Price" />
              <hr />
            <button  className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddService;