import React, { useEffect } from 'react';
import bmw from '../../../images/brands/bmw-logo.png'
import jaguar from '../../../images/brands/jaguar.png'
import ford from '../../../images/brands/ford-logo.png'
import nissan from '../../../images/brands/NISSAN-logo.png'
import tesla from '../../../images/brands/tesla-logo.png'
import toyota from '../../../images/brands/toyota-logo.png'
import mercedez from '../../../images/brands/Mercedez-Benz.png'
import audi from '../../../images/brands/Audi-logo.png'
import "./Brands.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Brands = () => {
    useEffect(() =>{
        Aos.init({duration : 1000});
    },[]);
    return (
        <div>
            <h1 className="text-center my-5 text-muted fw-bold">Our Most Popular Brands</h1>
            <div className="container brands">
                <div data-aos="fade-up" className="single-brand shadow-lg">
                   <img src={bmw} alt=""/>
                </div>
                <div data-aos="fade-up" className="single-brand shadow-lg">
                   <img src={tesla} alt=""/>
                </div>
                <div data-aos="fade-up" className="single-brand shadow-lg">
                   <img src={toyota} alt=""/>
                </div>
                <div data-aos="fade-up"  className="single-brand shadow-lg">
                   <img src={nissan} alt=""/>
                </div>
                <div data-aos="fade-up" className="single-brand shadow-lg">
                   <img src={jaguar} alt=""/>
                </div>
                <div data-aos="fade-up"  className="single-brand shadow-lg">
                   <img src={ford} alt=""/>
                </div>
                <div data-aos="fade-up"  className="single-brand shadow-lg"> 
                    <img src={mercedez} alt=""/>
                </div>
                <div data-aos="fade-up"  className="single-brand shadow-lg">
                    <img src={audi} alt=""/>
                </div> 
            </div>
        </div>
    );
};

export default Brands;