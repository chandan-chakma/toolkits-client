import React from 'react';
import Banner from './Banner';
import HomeTools from './HomeTools';
import Info from './Info';
import Testimonial from './Testimonial/Testimonial';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <HomeTools></HomeTools>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;