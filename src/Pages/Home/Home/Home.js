import React from 'react';
import Cycles from '../../Services/Cycles/Cycles';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import WhyChoose from '../WhyChoose/WhyChoose';
import NavTop from './../../Shared/NavTop/NavTop';
import Navigation from './../../Shared/Navigation/Navigation';
import Footer from './../../Shared/Footer/Footer';
import ClientReviews from '../ClientReviews/ClientReviews';

const Home = () => {
    return (
        <div>
            <NavTop/>
            <Navigation/>
            <Banner/>
            <WhyChoose/>
            <Cycles/>
            <Discount/>
            <ClientReviews/>
            <Footer/>
            
        </div>
    );
};

export default Home;