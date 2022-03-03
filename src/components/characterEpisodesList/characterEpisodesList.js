import React, { useState } from 'react';
import './characterEpisodesList.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import CharactersList from '../charactersList/charactersList';
import { useEffect } from 'react';



export default function CharacterEpisodesList({ listCharacter }) {

    const [charactersData, setCharactersData] = useState('');

    const rickAndMortyData = new RickAndMortyData();

    useEffect(() => {
        rickAndMortyData.getCharactersDataList(listCharacter)
            .then((charactersData) => {
                setCharactersData(charactersData)
            })
    });


    return (
        <>
            <ul
                className="episodes-list-container episode-border"
            >
                В эпизоде появлялись:
                {!charactersData ? <Spinner /> : CharactersList(charactersData)}
            </ul>
        </>
    );
}
// }