import { Link } from "react-router-dom";
import React from "react";

export default function Layout() {
    return (
        <>
            <div className='episode-container episode-border'>
                < Link className='episode-description' to={`/`}>
                    К Списку эпизодов
                </Link >
            </div>
        </>
    )
};