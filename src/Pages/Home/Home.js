import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeTools from './HomeTools';
import Info from './Info';
import Testimonial from './Testimonial/Testimonial';
import ProductVideo from './ProductVideo';
import SponsorLogo from './SponsorLogo';
import HomeContact from './HomeContact';




const Home = () => {
    return (
        <div className='mt-12'>
            <Banner></Banner>
            <Info></Info>
            <HomeTools></HomeTools>
            <BusinessSummary></BusinessSummary>
            <ProductVideo></ProductVideo>
            <HomeContact></HomeContact>
            <SponsorLogo></SponsorLogo>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;