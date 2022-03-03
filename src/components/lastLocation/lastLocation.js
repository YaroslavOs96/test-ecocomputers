import React, { useState, useEffect } from 'react';
import './lastLocation.css';
import Spinner from '../spinner';
import { Link } from 'react-router-dom';

const renderLocation = (location) => {
    if (!location) {
        return
    }
    return (
        <li className='episode-container episode-border location-button'>
            < Link
                className='episode-description '
                to={`/location/${location.id}`}
                key={`location${location.id}`}
            >
                {`${location.name}`}
            </Link >
        </li>
    )
};
export default function LastLocation({ location }) {

    return (
        <>
            <ul className="episodes-list-container episode-border">
                Последняя локация
                {!location ? <Spinner /> : renderLocation(location)}
            </ul>
        </>
    );


}
// }