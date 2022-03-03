
import React, { useState } from "react";
import './character.css';
import { useParams } from "react-router-dom";
import CharacterDescription from "../components/characterDescription/characterDescription";
import CharacterEpisodesList from "../components/characterEpisodesList/characterEpisodesList"
import LastLocation from "../components/lastLocation/lastLocation";
import Layout from "../components/Layout.jsx"

export default function Character() {

    const [EpisodeAndLocationCharacterData, setEpisodeAndLocationCharacterData] = useState('');

    const { id } = useParams();

    return (
        <>
            <Layout />
            <div>
                <CharacterDescription
                    id={id}
                    setEpisodeAndLocationCharacterData={setEpisodeAndLocationCharacterData}
                />
            </div>
            <div className="flex-list">
                <CharacterEpisodesList episodes={EpisodeAndLocationCharacterData.episodes} />
                <LastLocation location={EpisodeAndLocationCharacterData.location} />
            </div>
        </>
    )

}

