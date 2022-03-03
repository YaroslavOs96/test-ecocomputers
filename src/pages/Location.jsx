import React, { useState } from "react";
import LocationDescription from "../components/locationDescription/locationDescription";
import { useParams } from "react-router";
import EpisodeCharactersList from "../components/episodeCharactersList/episodeCharactersList";
import Layout from "../components/Layout.jsx"


export default function Location() {

    const { id } = useParams();

    const [listCharacter, setLocationEpisodesData] = useState('');

    return (
        <>
            <Layout />

            <div>
                <LocationDescription
                    id={id}
                    setLocationEpisodesData={setLocationEpisodesData}
                />
            </div>
            <div >
                <ul className="episodes-list-container episode-border">
                    Тут живут:
                    <EpisodeCharactersList listCharacter={listCharacter} />
                </ul>
            </div>
        </>
    )
}