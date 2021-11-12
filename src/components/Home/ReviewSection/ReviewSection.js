import React, { useEffect, useState } from 'react';
import "./ReviewSection.css"
import SingleReview from './SingleReview/SingleReview';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/reviews")
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
            console.log(data);
        })
    },[])
    return (
        <div className="my-5">
            <h1 className="text-center text-muted">What Our Clients Say?</h1>
            <div className="review-parent container p-5">
                {
                    reviews.map(review =><SingleReview key={review._id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default ReviewSection;