import React, { Component } from 'react';
import './allEpisodesList.css';
import Spinner from '../spinner';
import RickAndMortyData from '../../services/rickAndMortyData';
import visiableEpisodesList from '../episodesList/episodesList';

export default class AllEpisodesList extends Component {
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


    renderEpisodesList(arr) {
        return arr.map((episodeData, seasonNumber) => {
            const episodes = visiableEpisodesList(episodeData);
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
            visiableEpisodes = visiableEpisodesList(this.searchEpisodes(searchedEpisode));

        return (
            <>
                <div>
                    {!searchedEpisode ? allEpisodes : visiableEpisodes}
                </div>
            </>
        );
    }
}