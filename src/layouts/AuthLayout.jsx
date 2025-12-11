import React from 'react';
import appLogo from '../assets/appLogo.png'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-gray-50'>
            <img className='w-40 ml-10 pt-10' src={appLogo} alt="" />
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;