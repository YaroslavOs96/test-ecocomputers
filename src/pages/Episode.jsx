import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeDescription from "../components/episodeDescription/episodeDescription";
import EpisodeCharactersList from "../components/episodeCharactersList/episodeCharactersList";


export default function Episode() {

    const [listCharacter, setEpisodeCharacterData] = useState('');

    const { id } = useParams();

    return (
        <>
            <div>
                <EpisodeDescription
                    id={id}
                    setEpisodeCharacterData={setEpisodeCharacterData}
                />

            </div>
            <div >
                <EpisodeCharactersList listCharacter={listCharacter} />
            </div>
        </>
    )

}