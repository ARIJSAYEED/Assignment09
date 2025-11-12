import React from 'react';

const GameDetailsCard = ({ game }) => {
    return (
        <div>
            <div className="flex border justify-center items-center border-neutral-300 shadow-xl gap-5 rounded-2xl p-5 m-5">
                <div className="h-full flex-shrink-0">
                    <img
                        className="h-full w-auto object-cover rounded-2xl"
                        src={game.coverPhoto}
                        alt={game.title}
                    />
                </div>

                <div className="h-full rounded-2xl space-y-5 flex flex-col justify-between">
                    <div className='space-y-5'>
                        <h1 className="text-4xl font-bold text-[#0099FF]">{game.title}</h1>
                        <div className="flex justify-between">
                            <p className="text-md">
                                <span className="font-semibold">Category: </span> {game.category}
                            </p>
                            <p className="text-md">
                                <span className="font-semibold">Ratings: </span> {game.ratings}⭐
                            </p>
                        </div>
                        <p className="text-lg py-2 border-t-2 border-b-2 border-neutral-300">
                            <span className="font-semibold">Developer: </span> {game.developer}
                        </p>
                        <p className="text-xl">
                            <span className="font-semibold">Description: </span>{game.description}
                        </p>
                    </div>
                    <a className="link" target="_blank" rel="noreferrer" href={game.downloadLink}>
                    <button className=" btn px-5 py-2 bg-[#0099FF] text-white text-lg rounded-xl">
                        Download
                    </button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default GameDetailsCard;