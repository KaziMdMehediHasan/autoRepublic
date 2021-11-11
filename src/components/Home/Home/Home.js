import React from 'react';
import useAuth from '../../../hooks/useAuth';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    const{user} = useAuth();
    console.log(user);
    return (
        <div>
            <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;