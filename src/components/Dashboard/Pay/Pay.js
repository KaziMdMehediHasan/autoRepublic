import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";


const Pay = () => {

    useEffect(() =>{
        Aos.init({duration : 1000});
      },[]);
    return (
        <div data-aos="fade-up" className="p-5">
            <h1 className="text-light text-center">Payment System Coming Soon!</h1>
        </div>
    );
};

export default Pay;