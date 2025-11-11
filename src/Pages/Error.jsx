import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center gap-10'>
            <h1 className='text-8xl font-bold'>404 Page Error</h1>
            <button className='btn bg-[#0099FF] text-white text-lg'><Link to='/'>⬅️ Go back to Home</Link></button>
        </div>
    );
};

export default Error;