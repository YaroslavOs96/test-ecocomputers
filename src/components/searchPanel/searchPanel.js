import React, { Component } from "react";

import './search-panel.css'

export default class SearchPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchedEpisode: "",
        }
    }


    onUpdateSearch = (e) => {
        const searchedEpisode = e.target.value;
        this.setState({ searchedEpisode: searchedEpisode })
        this.props.onUpdateSearch(searchedEpisode)
    };

    render() {
        return (
            <input
                className="search-input episode-border"
                type="text"
                placeholder="Поиск по эпизодам"
                onChange={this.onUpdateSearch}
            />
        )
    }
}