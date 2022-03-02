import React, { Component } from 'react';
import './episodesList.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import { Link } from "react-router-dom";

export default class EpisodesList extends Component {
    state = {
        episodesList: null
    }

    rickAndMortyData = new RickAndMortyData();

    searchEpisodes(partName) {

        const
            episodeName = partName.toLowerCase(),
            { episodesList } = this.state,
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

    visiableEpisodesList(episodeData) {
        if (!episodeData) {
            return (
                <li className='episode-container episode-border'>
                    {`Эпизоды с таким именем не найдены`}
                </li>
            )
        }

        const visiableEpisodes = episodeData.map((episode) => {
            const { name, id, created, episodeInSeasonNumber } = episode
            return (
                <li
                    className='episode-container episode-border'
                    key={id}>
                    < Link
                        className='episode-description'
                        to={`/episode/${id}`}
                        key={`episode${id}`}
                    >
                        {`Серия №${episodeInSeasonNumber}  ${name}`}
                        {` Выпущена ${created}`}

                    </Link >
                </li>
            )
        });
        return (visiableEpisodes)
    };


    renderEpisodesList(arr) {
        return arr.map((episodeData, seasonNumber) => {
            const episodes = this.visiableEpisodesList(episodeData);
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

    componentDidMount() {
        this.rickAndMortyData.getAllEpisodesData()
            .then((episodesList) => {
                this.setState({
                    episodesList
                })
            })
    }

    render() {
        const { episodesList } = this.state,
            { searchedEpisode } = this.props;

        if (!episodesList) {
            return <Spinner />
        }

        const
            allEpisodes = this.renderEpisodesList(episodesList),
            visiableEpisodes = this.visiableEpisodesList(this.searchEpisodes(searchedEpisode));

        return (
            <>
                <div>
                    {!searchedEpisode ? allEpisodes : visiableEpisodes}
                </div>
            </>
        );
    }
}