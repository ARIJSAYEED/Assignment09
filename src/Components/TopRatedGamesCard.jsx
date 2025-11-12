import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';

const TopRatedGamesCard = ({ game }) => {
    let { user } = useContext(AuthContext)
    return (
        <div className='border border-neutral-300 p-5 rounded-2xl shadow-lg space-y-5'>
            <div>
                <img className='w-full rounded-2xl' src={game.coverPhoto} alt="" />
            </div>
            <div className=''>
                <h1 className='text-2xl font-semibold'>{game.title}</h1>
                <p className='text-sm font-medium text-neutral-500'>By {game.developer}</p>
            </div>
            <div>
                <Link to={user ? `/games-details/${game.id}` : '/auth/login'}>
                    <button className='rounded-lg w-full p-2 bg-[#0099FF] text-lg text-white font-semibold cursor-pointer'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default TopRatedGamesCard;