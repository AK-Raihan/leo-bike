import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyChoose/>
            <Discount/>
        </div>
    );
};

export default Home;