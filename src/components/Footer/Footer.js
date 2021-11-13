import React from "react";
import {
    faFacebook,
    faInstagram,
    faSnapchat,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelope,
    faMapMarkerAlt,
    faPhoneAlt,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import logo from "../../logo.png";
  import "./Footer.css";

const Footer = () => {
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
    const mail = <FontAwesomeIcon icon={faEnvelope} />;
    //   social media icons
    const facebook = <FontAwesomeIcon icon={faFacebook} />;
    const instagram = <FontAwesomeIcon icon={faInstagram} />;
    const twitter = <FontAwesomeIcon icon={faTwitter} />;
    const snapChat = <FontAwesomeIcon icon={faSnapchat} />;

    //card brand icons

    

    return (
      <div className="bg-dark text-light">
        <div className="container footer-parent ">
          <div className="footer-row p-3">
            <img src={logo} alt="brand" />
            <b>AutoRepublic</b>
            <p>Speed up the Future</p>
            <p>
              <span>{phone}</span> 070 2651 1084
            </p>
            <p>
              <span>{map} </span>
              65 Guild Street, London
            </p>
            <p>
              <span>{mail} </span>
              auto_republic@gmail.com
            </p>
          </div>
          <div className="footer-row">
              <h4>Brands</h4>
              <p>Audi</p>
              <p>BMW</p>
              <p>Mercedes Benz</p>
              <p>Tesla</p>
          </div>

          <div className="footer-row">
            <h4>Service and More</h4>
            <p>Warranty</p>
            <p>Service Coupons</p>
            <p>AutoRepublic Vehicle Protection</p>
            <p>Terms And Conditions</p>
          </div>
          <div className="footer-row">
            <h4>Follow Us</h4>
            <p>
              <span>{facebook} </span> facebook.com/autorepublic
            </p>
            <p>
              <span>{instagram} </span> instagram.com/auto_republic
            </p>
            <p>
              <span>{twitter} </span> twitter.com/autorepublic
            </p>
            <p>
              <span>{snapChat} </span> republic_auto
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Footer;