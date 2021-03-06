import React, { useEffect, useState } from 'react';
import "./ReviewSection.css"
import SingleReview from './SingleReview/SingleReview';
import Aos from "aos";
import "aos/dist/aos.css";

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch("https://calm-earth-69765.herokuapp.com/reviews")
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
            console.log(data);
        })
    },[])

    // animation
    useEffect(() =>{
        Aos.init({duration : 1000});
    },[]);
    return (
        <div className="my-5">
            <h1 className="text-center text-muted fw-bold">What Our Clients Say?</h1>
            <div className="review-parent container p-5">
                {
                    reviews.map(review =><SingleReview key={review._id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default ReviewSection;