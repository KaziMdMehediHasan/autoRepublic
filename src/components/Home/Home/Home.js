import React from 'react';
import useAuth from '../../../hooks/useAuth';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    const{user} = useAuth();
    console.log(user);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ReviewSection></ReviewSection>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;