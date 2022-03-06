import React from 'react';
import './lastLocation.css';
import Spinner from '../spinner';
import { Link } from 'react-router-dom';

const renderLocation = ({ id, name }) => {

    return (
        <div className='episode-container episode-border location-button'>
            < Link
                className='episode-description'
                to={!id ? '#' : `/location/${id}`}
            >
                {name === 'unknown' ? 'Неизвестно' : name}
            </Link >
        </div >
    )
};

export default function LastLocation({ location }) {
    return (
        <>
            <div className="episodes-list-container episode-border">
                Локация
                {!location ? <Spinner /> : renderLocation(location)}
            </div>
        </>
    );
}
