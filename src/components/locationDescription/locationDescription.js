import React, { useState } from 'react';
import './locationDescription.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const renderLocationDescription = (description) => {
    const { name, type } = description;
    return (
        <div className='episode-container episode-border'>
            < span className='episode-description'>
                {`Планета: ${name}`}
                {` Тип ${type}`}
            </span >
        </div>
    )
};



export default function LocationDescription({ id, setLocationEpisodesData }) {

    const [locationDescription, setDescription] = useState(''),
        rickAndMortyData = new RickAndMortyData(),
        goNotfound = useNavigate();

    useEffect(() => {
        rickAndMortyData.getLocationData(id)
            .then((locationData) => {
                setDescription(locationData.description)
                setLocationEpisodesData(locationData.allCharacterID)
            })
            .catch(() => {
                goNotfound('/notfound')
            })
    }, []);

    return (
        <>
            <div>
                {!locationDescription ? <Spinner /> : renderLocationDescription(locationDescription)}
            </div>
        </>
    );
}
// }