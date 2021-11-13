import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Brands from '../Brands/Brands';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import ReviewSection from '../ReviewSection/ReviewSection';
import "./Home.css";

const Home = () => {
    const{user} = useAuth();
    console.log(user);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <HomeBanner></HomeBanner>
            <ReviewSection></ReviewSection>
            <HomeProducts></HomeProducts>
            <Brands></Brands>
            <div className="home-foot mt-5">
               <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;