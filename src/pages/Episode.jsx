import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeDescription from "../components/episodeDescription/episodeDescription";
import EpisodeCharactersList from "../components/episodeCharactersList/episodeCharactersList";
import Layout from "../components/Layout.jsx"

export default function Episode() {

    const [listCharacter, setEpisodeCharacterData] = useState('');

    const { id } = useParams();

    return (
        <>
            <Layout />
            <div>
                <EpisodeDescription
                    id={id}
                    setEpisodeCharacterData={setEpisodeCharacterData}
                />

            </div>
            <div >
                <ul className="episodes-list-container episode-border">
                    В эпизоде появлялись:
                    <EpisodeCharactersList listCharacter={listCharacter} />
                </ul>
            </div>
        </>
    )

}