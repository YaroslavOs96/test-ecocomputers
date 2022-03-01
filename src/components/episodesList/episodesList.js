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

    renderEpisodesList(arr) {
        return arr.map((episodeData, seasonNumber) => {
            const episodes = episodeData.map((episode) => {
                const { name, id, created, episodeInSeasonNumber } = episode
                return (
                    < Link
                        to={`/episode/${id}`}
                        key={`episode${id}`}
                    >
                        {`Серия №${episodeInSeasonNumber}  ${name}`}
                        {` Выпущена ${created}`}
                    </Link >
                )
            });
            return (
                <ul
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
        const { episodesList } = this.state;

        if (!episodesList) {
            return <Spinner />
        }

        const items = this.renderEpisodesList(episodesList);


        return (
            <>
                <ul className="item-list list-group">
                    {items}
                </ul>

            </>
        );
    }
}