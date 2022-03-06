import React, { useState } from 'react';
import './episodeCharactersList.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import CharactersList from '../charactersList/charactersList';

export default function EpisodeCharactersList({ listCharacter }) {

    const [charactersData, setCharactersData] = useState('');

    const rickAndMortyData = new RickAndMortyData();

    if (listCharacter && charactersData === '') {
        rickAndMortyData.getCharactersDataList(listCharacter)
            .then((data) => {
                setCharactersData(data)
            })
    }

    return (
        <>
            {!charactersData ? <Spinner /> : CharactersList(charactersData)}
        </>
    );
}
// }