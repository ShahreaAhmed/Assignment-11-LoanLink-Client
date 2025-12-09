import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;