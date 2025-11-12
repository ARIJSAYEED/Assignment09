import React, { useEffect, useState } from 'react';
import HW from '../assets/hk.jpg'
import MC from '../assets/mc.jpg'
import EG from '../assets/eg.jpg'


const PopularGames = () => {

    let [games, setGames] = useState([])

    useEffect(() => {

        let data = fetch('/Popular.json')
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                setGames(data)
            })
    }, [])

    return (
        <div>
            <div className='flex gap-3 my-10 px-5 min-h-screen'>
                <div className='w-1/3 flex items-center'>
                    <h1 className='text-5xl font-bold'>Most Popular <span className='text-8xl font-bold'>Games</span></h1>
                </div>
                <div className='w-2/3'>
                    <div className="carousel h-96 flex justify-center items-center">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularGames;