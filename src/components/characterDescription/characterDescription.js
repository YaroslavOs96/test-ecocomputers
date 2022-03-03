import React, { useState } from 'react';
import './characterDescription.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import { useEffect } from 'react';
import CharactersList from '../charactersList/charactersList';



export default function CharacterDescription({ id, setEpisodeAndLocationCharacterData }) {

    const [characterDescription, setCharacterDescription] = useState('');

    const rickAndMortyData = new RickAndMortyData();

    useEffect(() => {
        rickAndMortyData.getCharacterData(id)
            .then((characterData) => {
                setCharacterDescription(characterData.description)
                setEpisodeAndLocationCharacterData(characterData)
            })
    }, []);

    return (
        <>
            <div>
                {!characterDescription ? <Spinner /> : CharactersList(characterDescription)}
            </div>
        </>
    );
}
// }