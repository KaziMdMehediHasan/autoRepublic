import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/NavigationBar';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    const{user} = useAuth();
    console.log(user);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <HomeBanner></HomeBanner>
            <ReviewSection></ReviewSection>
            <HomeProducts></HomeProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;