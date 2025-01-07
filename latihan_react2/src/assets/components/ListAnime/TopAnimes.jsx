// import React from 'react';
// import Card from '../Card/Card';
// import '../Card/Card.css';
// import './ListAnimes.css';
// import axios from 'axios';
// import { useState } from 'react';
// import { useImmer } from 'use-immer';
// // import { useState } from 'react';

// const initialData = [
//     {
//         id: '',
//         title:'',
//         genre:[],
//         image: '',
//     }
// ]

// axios.defaults.baseURL = 'https://api.jikan.moe/v4';
// export default function TopAnimes() {
//     const [animes, setAnimes] = React.useState([]);

//     React.useEffect(() => {
//         axios.get('/top/anime').then((response) => {
//             setAnimes(response.data.data);
//         });
//     }, []);

//     return (
//         <div className='top-animes'>
//             {animes.map((anime) => (
//                 <Card key={anime.mal_id} {...anime} />
//             ))}
//         </div>
//     );  
//         }
// axios.defaults.baseURL = 'https://api.jikan.moe/v4';
// axios.get('/top/anime').then((response) => {
//                 console.log(response.data.data);
//             });
// const TopAnimes = () => {
    // const animes = [
    //     { id: 1, title: 'Attack on Titan', genre: ['Action', 'Drama'], image: 'https://cdn.myanimelist.net/images/anime/1377/146200.jpg', description: 'A world where humanity is forced to live in cities surrounded by enormous walls to protect themselves from giant humanoid creatures known as Titans.' },
    //     { id: 2, title: 'Naruto', genre: ['Action', 'Adventure'], image: 'https://cdn.myanimelist.net/images/anime/1377/146200.jpg', description: 'A young ninja named Naruto Uzumaki is on a mission to kill the legendary ninja known as Sasuke Uzumaki.' },
    //     { id: 3, title: 'One Piece', genre: ['Adventure', 'Action'], image: 'https://cdn.myanimelist.net/images/anime/1377/146200.jpg', description: 'A pirate named Monkey D. Luffy sets sail on a journey to find the legendary treasure known as the One Piece.' },
    //     { id: 4, title: 'My Hero Academia', genre: ['Action', 'Drama'], image: 'https://cdn.myanimelist.net/images/anime/1377/146200.jpg', description: 'A group of students who become superheroes in order to fight crime.' },
    //     { id: 5, title: 'Demon Slayer', genre: ['Action', 'Drama'], image: 'https://cdn.myanimelist.net/images/anime/1377/146200.jpg', description: 'A group of teenagers who are hunted by demons.' },
    // ];
    // const [animes,setAnimes] = useState([]);
    // React.useEffect(() => {
    //     axios.get('/top/anime').then((response) => {
    //         setAnimes(response.data.data);
    //     });
    // })
//     const [animes, setAnimes] = useImmer(initialData);
//     React.useEffect(() => {
//         axios.get('https://api.jikan.moe/v4/top/anime').then((response) => {
//             // setAnimes(response.data.data);
//             const datas = response.data.data.slice(0, 5);
//             setAnimes(draft => {
//                 datas.forEach((data) => {
//                     draft[genre] = data.genres.map((genre) => genre.name);
//                     draft[image] = data.images.webp.image_url;
//                     draft[title] = data.title;
//                     draft[id] = data.mal_id;
//                 });
//                 return datas;

//             });

//         });
//     }, []);

//     return (
//         <div className='top-animes'>
//             <ul>
//                 {animes.map((anime) => (
//                     <li key={anime.id}>
//                         <Card {...anime}/>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };



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
