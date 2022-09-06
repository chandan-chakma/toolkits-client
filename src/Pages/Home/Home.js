import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeTools from './HomeTools';
import Info from './Info';
import Testimonial from './Testimonial/Testimonial';
import ProductVideo from './ProductVideo';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <HomeTools></HomeTools>
            <BusinessSummary></BusinessSummary>
            <ProductVideo></ProductVideo>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;