import React from 'react';
import Card from './Card';

const TopAnimes = () => {
    const animes = [
        { id: 1, title: 'Attack on Titan' },
        { id: 2, title: 'Naruto' },
        { id: 3, title: 'One Piece' },
        { id: 4, title: 'My Hero Academia' },
        { id: 5, title: 'Demon Slayer' }
    ];

    return (
        <div>
            <h1>Top Animes</h1>
            <ul>
                {animes.map((anime) => (
                    <li key={anime.id}>
                        <Card {...anime}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopAnimes;