import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {

    const {user} = useAuth();
    const preloadedValues = {
        name: user.displayName,
        email: user.email,
      };
      const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues,
      });

      const onSubmit = (reviewData, e) => {

        // sending req to the server

        fetch("http://localhost:5000/reviews",{
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(reviewData)
        })
        .then(res=>res.json())
        .then(data =>{
          if(data.insertedId){
            alert("Success!")
          }
          console.log(data);
        })

        console.log(reviewData);
        e.target.reset();
    }

    return (
        <div>
            <h1>Leave a Review</h1>
            <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true })}
                placeholder="name *required"
              />
              <hr />
              <input
                {...register("profession", { required: true })}
                placeholder="example: CEO, Auto Republic*required"
              />
              <hr />
              <input 
                {...register("email", { required: true })} placeholder="email *required" />
              <hr />
              <textarea 
                {...register("opinion",{ required: true })} placeholder="Tell us What you feel about us? *required" />
              <input
                {...register("rating",{ required: true })} placeholder="Rate us out of 5 *required" />
              <hr />
              <input className="submit" type="submit"/>
            </form>
        </div>
    );
};

export default Review;