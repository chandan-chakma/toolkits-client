import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeTools from './HomeTools';
import Info from './Info';
import Testimonial from './Testimonial/Testimonial';
import ProductVideo from './ProductVideo';
import SponsorLogo from './SponsorLogo';
import HomeContact from './HomeContact';
import Footer from '../SharePages/Footer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <HomeTools></HomeTools>
            <BusinessSummary></BusinessSummary>
            <ProductVideo></ProductVideo>
            <HomeContact></HomeContact>
            <SponsorLogo></SponsorLogo>
            <Testimonial></Testimonial>
            <Footer></Footer>


        </div>
    );
};

export default Home;