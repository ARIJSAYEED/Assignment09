import React, { useEffect, useState } from 'react';
import TopRatedGamesCard from './TopRatedGamesCard';
import { Link } from 'react-router';

const TopRatedGames = () => {
    let [data, setData] = useState([])

    useEffect(() => {

        let data = fetch('/Top3.json')
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                setData(data)
            })
    }, [])

    return (

        <div className='my-10 space-y-5 py-10 border-b border-t border-neutral-400'>
            <div>
                <h1 className='text-4xl font-semibold text-center'>Top Rated Games</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 '>
                {
                    data.map(game => <TopRatedGamesCard key={game.id} game={game}></TopRatedGamesCard>)
                }
            </div>
            <div className='text-center'>
                <Link className='text-center text-xl font-medium' to='/games'>Explore All Games ➡️</Link>
            </div>
        </div>

    );
};

export default TopRatedGames;