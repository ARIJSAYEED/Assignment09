import React from 'react';
import { Outlet } from 'react-router';
import PopularGames from '../Components/PopularGames';
import TopRatedGames from '../Components/TopRatedGames';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div>
                <PopularGames></PopularGames>
            </div>
            <div>
                <TopRatedGames></TopRatedGames>
            </div>
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;