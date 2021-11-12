import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faUserTie } from '@fortawesome/free-solid-svg-icons';
import "./SingleReview.css";

const SingleReview = (props) => {
    const {name, profession,opinion,rating} = props.review;

    const user = <FontAwesomeIcon icon={faUserTie}/>
    const quoteLeft = <FontAwesomeIcon icon={faQuoteLeft}/>
    const quoteRight = <FontAwesomeIcon icon={faQuoteRight}/>
    return (
        <div className="review-card shadow">
            <h3><span style={{color: "#50A374"}}>{user}</span> {name}</h3>
            <h5 className="text-muted">{profession}</h5>
            <p className="">{quoteLeft} {opinion.slice(0,50)} {quoteRight}</p>
        </div>
    );
};

export default SingleReview;