import React from 'react';
import Cycles from '../../Services/Cycles/Cycles';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyChoose/>
            <Cycles/>
            <Discount/>
            
        </div>
    );
};

export default Home;