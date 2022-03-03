import React, { Component } from 'react';
import './episodesList.css';
import { Link } from "react-router-dom";

export default function visiableEpisodesList(episodeData) {
    
    if (episodeData.length === 0) {
        return (
            <li className='episode-container episode-border'>
                {`Эпизоды с таким именем не найдены`}
            </li>
        )
    }

    const visiableEpisodes = episodeData.map((episode) => {
        const { name, id, created, episodeInSeasonNumber } = episode
        return (
            <li
                className='episode-container episode-border'
                key={id}>
                < Link
                    className='episode-description'
                    to={`/episode/${id}`}
                    key={`episode${id}`}
                >
                    {`Серия №${episodeInSeasonNumber}  ${name}`}
                    {` Выпущена ${created}`}

                </Link >
            </li>
        )
    });
    return (visiableEpisodes)
};