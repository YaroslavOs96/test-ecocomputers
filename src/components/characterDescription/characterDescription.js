import React, { useState, useEffect } from 'react';
import './characterDescription.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import { useNavigate } from 'react-router';


const renderCharacterDescription = ({ name, species, status }) => {
    return (
        <div className='episode-container episode-border'>
            < span className='episode-description'>
                {`Персонаж ${name === 'unknown' ? 'Неизвестно' : name}
                 вид ${species === 'unknown' ? 'Неизвестно' : species} 
                 статус ${status === 'unknown' ? 'Неизвестно' : status}`}
            </span >
        </div>
    )
};

export default function CharacterDescription({ id, setEpisodeAndLocationCharacterData }) {

    const [characterDescription, setCharacterDescription] = useState(''),
        rickAndMortyData = new RickAndMortyData(),
        goNotfound = useNavigate();


    useEffect(() => {
        rickAndMortyData.getCharacterData(id)
            .then((characterData) => {
                setCharacterDescription(characterData.description)
                setEpisodeAndLocationCharacterData(characterData)
            })
            .catch(() => {
                goNotfound('/notfound')
            })
    }, []);

    return (
        <>
            <div>
                {!characterDescription ? <Spinner /> : renderCharacterDescription(characterDescription)}
            </div>
        </>
    );
}