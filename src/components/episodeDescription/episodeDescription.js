import React, { useState } from 'react';
import './episodeDescription.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import visiableEpisodesList from '../episodesList/episodesList';
import { useEffect } from 'react';



export default function EpisodeDescription({ id, setEpisodeCharacterData }) {

    const [episodeData, setDescription] = useState('');

    const rickAndMortyData = new RickAndMortyData();

    useEffect(() => {
        rickAndMortyData.getEpisodeData(id)
            .then((episodeData) => {
                setDescription(episodeData)
                setEpisodeCharacterData(episodeData.characters)
            })
    }, []);

    console.log(episodeData);

    return (
        <>
            <div>
                {!episodeData.description ? <Spinner /> : visiableEpisodesList(episodeData.description)}
            </div>
        </>
    );
}
// }