import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import {
  faHandshake,
  faRoute,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./WhySection.css";

const Why = () => {
  //icons

  const guides = <FontAwesomeIcon icon={faUsers} size="5x" />;
  const handShake = <FontAwesomeIcon icon={faHandshake} size="5x" />;
  const route = <FontAwesomeIcon icon={faRoute} size="5x" />;
  const happy = <FontAwesomeIcon icon={faSmileBeam} size="5x" />;
  return (
    <div className="reason-parent my-5">
      {/* first  */}
      <div className="reason shadow-lg rounded-3 p-5 bg-primary bg-gradient">
        <div>{guides}</div>
        <div>
          <h4>Our top notch recommendation team</h4>
        </div>
      </div>
      {/* second */}
      <div className="reason shadow-lg rounded-3 p-5 bg-info bg-gradient">
        <div>{handShake}</div>
        <div>
          <h4>100% trusted business</h4>
        </div>
      </div>
      {/* third */}
      <div className="reason shadow-lg rounded-3 p-5 bg-danger bg-gradient">
        <div>{route}</div>
        <div>
          <h4>10+ years of business experience</h4>
        </div>
      </div>
      {/* fourth */}
      <div className="reason shadow-lg rounded-3 p-5 bg-secondary bg-gradient">
        <div>{happy}</div>
        <div>
          <h4>95%+ Customer Satisfaction</h4>
        </div>
      </div>
    </div>
  );
};

export default Why;
