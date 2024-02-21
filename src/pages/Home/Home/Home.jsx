import React from 'react';
import Banner from '../../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';
import RecommendsMenu from '../RecommendsMenu/RecommendsMenu';
import FeaturedMenu from '../FeaturedMenu/FeaturedMenu';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container mx-auto'>
                <Category />
                <About />
                <PopularMenu />
                <CallUs />
                <RecommendsMenu />
            </div>
            <FeaturedMenu />
        </div>
    );
};

export default Home;