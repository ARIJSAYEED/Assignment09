import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router';
import NavBar from './NavBar/NavBar';

const Root = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;