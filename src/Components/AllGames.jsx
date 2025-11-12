import React from 'react';
import { useLoaderData } from 'react-router';
import GameCard from './GameCard';

const AllGames = () => {
    let data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center'>All Exculsive Apps</h1>
            </div>
            <div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map(game => <GameCard key={game.id} game={game}></GameCard>)
                }
            </div>
        </div>
    );
};

export default AllGames;