import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
        </div>
    );
};

export default Home;