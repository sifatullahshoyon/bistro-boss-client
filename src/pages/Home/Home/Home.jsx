import React from 'react';
import Banner from '../../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container mx-auto'>
                <Category />
            </div>
        </div>
    );
};

export default Home;