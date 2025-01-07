import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import '../Card/Card.css';
import './ListAnimes.css';
import axios from 'axios';
import { useImmer } from 'use-immer';

const initialData = [
    {
        id: '',
        title: '',
        genre: [],
        image: '',
    }
];

const TopAnimes = () => {
    const [animes, setAnimes] = useImmer(initialData);

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/top/anime').then((response) => {
            const datas = response.data.data.slice(0, 5);
            setAnimes(draft => {
                datas.forEach((data, index) => {
                    draft[index] = {
                        id: data.mal_id,
                        title: data.title,
                        genre: data.genres.map((genre) => genre.name),
                        image: data.images.webp.image_url,
                    };
                });
            });
        });
    }, [setAnimes]);

    return (
        <div className='top-animes'>
            <ul>
                {animes.map((anime) => (
                    <li key={anime.id}>
                        <Card {...anime} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopAnimes;
