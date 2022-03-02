import React, { Component } from "react";
import EpisodesList from "../components/episodesList/episodesList"
import SearchPanel from "../components/searchPanel/searchPanel";


export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedEpisode: ""
        };
    }


    onUpdateSearch = (searchedEpisode) => {
        this.setState({ searchedEpisode })
    };
    render() {
        return (
            <>
                <div>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                </div>
                <div >
                    <EpisodesList searchedEpisode={this.state.searchedEpisode} />
                </div>
            </>
        )
    }
}