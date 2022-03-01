import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage.jsx";
import Episode from "./pages/Episode.jsx"


export default function App() {


    return (
        <>
            <header>
                RaM
            </header>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/episode" element={<Episode />} />
                <Route path="/episode/:id" element={<Episode />} />
            </Routes>
        </>
    )

}