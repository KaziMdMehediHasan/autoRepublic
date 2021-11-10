import React from 'react';
import banner5 from "../../../images/banner5.jpg"
import banner4 from "../../../images/banner4.jpg"
import banner3 from "../../../images/banner3.jpg"
import "./HomeBanner.css"
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
              <div className="caru-img">
                  <img src={banner5} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-caption custom">
              <h1>A Burning Passion For Quality</h1>
              <p>Crafted with premium materials for excellence and leadership</p>
              <Link to="/allProducts">
                 <button className="btn btn-info">Explore</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
              <div className="caru-img">
                  <img src={banner4} className="caru-img d-block w-100" alt="..."/>
              </div>
            <div className="carousel-caption custom">
              <h1>The Glorious Speed</h1>
              <p>Relive the youth with our fastest cars in the industry.</p>
              <Link to="/allProducts">
                 <button className="btn btn-info">Explore</button>
              </Link>
         
            </div>
          </div>
          <div className="carousel-item">
              <div className="caru-img">
                  <img src={banner3} className="caru-img d-block w-100" alt="..."/>
              </div>
            <div className="carousel-caption custom">
              <h1>Get Experience Of Luxury Car</h1>
              <p>Zero comprize quality and a symbol of excellence with our Premium Luxury Cars</p>
              <Link to="/allProducts">
                 <button className="btn btn-info">Explore</button>
              </Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    );
};

export default HomeBanner;