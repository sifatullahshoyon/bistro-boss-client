import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../pages/Home/Home/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-544px)]'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;