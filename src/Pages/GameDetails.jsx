import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer';
import GameDetailsCard from '../Components/GameDetailsCard';

const GameDetails = () => {

    let data = useLoaderData()

    let { id } = useParams();

    // console.log(id, data);

    let [game, setGame] = useState({})

    useEffect(() => {
        let g = data.find(singleG => singleG.id == id);
        setGame(g)
    }, [data, id])

    return (
        <div className='max-w-[1200px] mx-auto'>
            <NavBar></NavBar>
            <GameDetailsCard key={game.id} game={game}></GameDetailsCard>
            <Footer></Footer>
        </div>
    );
};

export default GameDetails;