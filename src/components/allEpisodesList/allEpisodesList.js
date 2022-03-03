import React, { useEffect, useState } from 'react';
import './allEpisodesList.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import VisiableEpisodesList from '../episodesList/visiableEpisodesList';

export default function AllEpisodesList({ searchedEpisode }) {
    
    useEffect(() => {
        rickAndMortyData.getAllEpisodesData()
            .then((episodesList) => {
                setEpisodesList(episodesList)
            })
    }, []);

    const [episodesList, setEpisodesList] = useState('');

    const rickAndMortyData = new RickAndMortyData();

    const searchEpisodes = (partName) => {
        const
            episodeName = partName.toLowerCase(),
            foundedEpisodes = [];

        episodesList.forEach(function (season) {
            season.forEach(episode => {
                if (episode.name.toLowerCase().indexOf(episodeName) >= 0) {
                    foundedEpisodes.push(episode)
                }
            })
        });
        return foundedEpisodes
    }

    const renderEpisodesList = (arr) => {
        return arr.map((episodeData, seasonNumber) => {
            const episodes = VisiableEpisodesList(episodeData);
            return (
                <ul
                    className="episodes-list-container episode-border"
                    key={`season${seasonNumber}`}
                >
                    {`Сезон ${seasonNumber + 1}`}
                    {episodes}
                </ul>
            )
        })
    }

    if (!episodesList) {
        return <Spinner />
    }

    return (
        <>
            <div>
                {!searchedEpisode ? renderEpisodesList(episodesList) : VisiableEpisodesList(searchEpisodes(searchedEpisode))}
            </div>
        </>
    );
}
