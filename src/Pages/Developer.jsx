import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router';
import Developers from '../Components/Developers';

const Developer = () => {
    let data = useLoaderData();
    return (
        <div>
            <div className='max-w-[1200px] mx-auto space-y-5'>
                <NavBar></NavBar>
                <div>
                    <h1 className='text-4xl font-bold text-center'>Our Developers</h1>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        data.map(d => <Developers d={d}></Developers>)
                    }
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Developer;