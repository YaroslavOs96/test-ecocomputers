import React, { useState } from "react";
import AllEpisodesList from "../components/allEpisodesList/allEpisodesList"
import SearchPanel from "../components/searchPanel/searchPanel";


export default function Homepage() {

    const [searchedEpisode, setSearchedEpisode] = useState('');

    return (
        <>
            <div>
                <SearchPanel onUpdateSearch={setSearchedEpisode} />
            </div>
            <div >
                <AllEpisodesList searchedEpisode={searchedEpisode} />
            </div>
        </>
    )
}