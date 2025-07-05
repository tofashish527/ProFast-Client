import React from 'react';
import Banner from '../Component/Banner';
import OurServices from '../Component/OurServices';
import HowItWorks from '../Component/HowItWorks';
import ScrollingLogos from '../Component/ScrollingLogos';
import FAQ from '../Component/FAQ';
import Review from '../Component/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <ScrollingLogos></ScrollingLogos>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;