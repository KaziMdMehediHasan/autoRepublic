import React from 'react';
import useAuth from '../../../hooks/useAuth';
import HomeBanner from '../HomeBanner/HomeBanner';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    const{user} = useAuth();
    console.log(user);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;