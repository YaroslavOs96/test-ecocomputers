import React, { Component } from 'react';
import './charactersList.css';
import { Link } from "react-router-dom";

export default function CharactersList(charactersData) {

    const charactersList = charactersData.map((character) => {
        const { name, id, species } = character
        return (
            < li
                className='episode-container episode-border'
                key={id} >
                < Link
                    className='episode-description'
                    to={`/character/${id}`}
                    key={`character${id}`}
                >
                    {`Имя персонажа: ${name}`}
                    {` Вид: ${species}`}

                </Link >
            </li >
        )
    });
    return (charactersList)
};