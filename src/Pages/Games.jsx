import React from 'react';
import Footer from '../Components/Footer';
import AllGames from '../Components/AllGames';
import NavBar from '../Components/NavBar/NavBar';

const Games = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <NavBar></NavBar>
            <AllGames></AllGames>
            <Footer></Footer>
        </div>
    );
};

export default Games;