import React from 'react';

const NewsLetter = () => {
    return (
        <div className='my-10' >
            <div className='space-y-5 text-center rounded-2xl mx-40 p-10 bg-black text-white'
            >
                <img src="" alt="" />

                <h1 className='text-4xl font-semibold'>Subscribe Newsletter</h1>

                <p className='text-lg font-normal text-neutral-500'>You will miss our podcasts, latest news etc. Our newsletter is once a week, every Tuesday</p>

                <div className='flex justify-center items-center'>

                    <input className='border p-2 border-r-none rounded-tl-2xl rounded-bl-2xl' type="text" placeholder='example@email.com' />

                    <button className='bg-[#0099ff] font-semibold px-4 py-2 border border-l-none rounded-tl-none rounded-bl-none rounded-tr-2xl rounded-br-2xl'>Subscribe</button>
                </div>

                <p className='text-xl font-normal text-neutral-600'>We promise not to spam you!</p>
            </div>
        </div>
    );
};

export default NewsLetter;