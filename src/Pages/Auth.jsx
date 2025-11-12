import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Auth = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='sticky top-0 z-10'> 
                    <NavBar></NavBar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Auth;