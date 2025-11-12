import React from 'react';

const Developers = ({ d }) => {
    return (
        <div>
            <div className='border border-neutral-300 shadow-xl p-10 rounded-2xl text-center'>
                <h1 className='text-2xl font-semibold'>{d.developer}</h1>
                <p className='text-md font-medium text-neutral-500'>{d.title}</p>
            </div>
        </div>
    );
};

export default Developers;