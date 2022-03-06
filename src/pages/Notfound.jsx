
import React, { useState } from "react";
import Layout from "../components/Layout.jsx"

export default function Notfound() {



    return (
        <>
            <Layout />
            <div className='episode-container episode-border'>
                < span className='episode-description'>
                    Такой страницы нет, перейдите ко всем эпизодам:)
                </span >
            </div>
        </>
    )

}

