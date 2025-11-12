// import React, { useEffect, useState } from 'react';
import HW from '../assets/hk.jpg'
import MC from '../assets/mc.jpg'
import EG from '../assets/eg.jpg'


const PopularGames = () => {


    return (
        <div>
            <div className='flex justify-center items-center flex-col gap-5 my-10 px-5 min-h-screen'>
                <div className='items-center text-center' >
                <p className='text-xl font-semibold text-[#0099ff]'>Welcome to GameHub</p>
                    <h1 className='text-5xl font-bold'>Our Most Popular Games</h1>
                </div>
                <div className="carousel w-80 h-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={HW}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={MC}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={EG}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PopularGames;