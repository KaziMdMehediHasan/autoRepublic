import React from 'react';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Leave a Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
            
                <input  {...register("customerName")} />

                <input {...register("review", { required: true })} />
                <input type='number' {...register("rating", { required: true })} />
                
                <input type="submit" />
                </form>
        </div>
    );
};

export default Review;