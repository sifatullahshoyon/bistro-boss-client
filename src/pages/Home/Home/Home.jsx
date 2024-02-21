import React from 'react';
import Banner from '../../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';
import RecommendsMenu from '../RecommendsMenu/RecommendsMenu';

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
        </div>
    );
};

export default Home;