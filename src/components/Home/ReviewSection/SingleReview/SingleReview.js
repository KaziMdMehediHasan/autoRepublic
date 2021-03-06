import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faUserTie } from '@fortawesome/free-solid-svg-icons';
import "./SingleReview.css";
import Rating from 'react-rating';
import Aos from "aos";
import "aos/dist/aos.css";

const SingleReview = (props) => {
    const {name, profession,opinion,rating} = props.review;

    const user = <FontAwesomeIcon icon={faUserTie}/>
    const quoteLeft = <FontAwesomeIcon icon={faQuoteLeft}/>
    const quoteRight = <FontAwesomeIcon icon={faQuoteRight}/>

    useEffect(() =>{
        Aos.init({duration : 1000});
    },[]);
    return (
        <div data-aos="fade-up" className="review-card shadow">
            <h3><span style={{color: "#50A374"}}>{user}</span> {name}</h3>
            <h5 className="text-muted">{profession}</h5>
            <p className="">{quoteLeft} {opinion.slice(0,70)}... {quoteRight}</p>
            <Rating 
            fullSymbol = "fas fa-star rating-icon-color"
            emptySymbol = "far fa-star rating-icon-color"
            readonly
            initialRating={rating}></Rating>
        </div>
    );
};

export default SingleReview;