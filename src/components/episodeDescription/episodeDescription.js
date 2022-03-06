import React, { useState, useEffect } from 'react';
import './episodeDescription.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import { useNavigate } from 'react-router';

const renderEpisodeDescription = ({ name, created, episodeInSeasonNumber, seasonNumber }) => {
    return (
        <div className='episode-container episode-border'>
            < span className='episode-description'>
                {`Серия ${name} под №${episodeInSeasonNumber} ${seasonNumber}-ого сезона Выпущена ${created}`}
            </span >
        </div>
    )
};

export default function EpisodeDescription({ id, setEpisodeCharacterData }) {

    const
        [episodeData, setDescription] = useState(''),
        rickAndMortyData = new RickAndMortyData(),
        goNotfound = useNavigate();

    useEffect(() => {
        rickAndMortyData.getEpisodeData(id)
            .then((episodeData) => {
                setDescription(episodeData)
                setEpisodeCharacterData(episodeData.characters)
            })
            .catch(() => {
                goNotfound('/notfound')
            })
    }, []);

    return (
        <>
            <div className="episodes-list-container episode-border">
                {!episodeData.description ? <Spinner /> : renderEpisodeDescription(episodeData.description)}
            </div>
        </>
    );
}
// }