import React from 'react';
import Banner from '../../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container mx-auto'>
                <Category />
                <About />
            </div>
        </div>
    );
};

export default Home;