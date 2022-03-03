import React, { useState } from 'react';
import './characterEpisodesList.css';
import Spinner from '../spinner';
import VisiableEpisodesList from '../episodesList/visiableEpisodesList';

export default function CharacterEpisodesList({ episodes }) {
    return (
        <>
            <ul className="episodes-list-container episode-border">
                Персонаж появлялся в эпизодах:
                {!episodes ? <Spinner /> : VisiableEpisodesList(episodes)}
            </ul>
        </>
    );
}
// }