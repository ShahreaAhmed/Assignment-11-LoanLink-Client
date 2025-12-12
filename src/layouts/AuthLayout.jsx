import React from 'react';
import appLogo from '../assets/appLogo.png'
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-gray-50'>
            <Link to="/">
            <img className='w-40 ml-10 pt-10' src={appLogo} alt="" />
            </Link>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;