import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage.jsx";
import Episode from "./pages/Episode.jsx"
import Character from "./pages/Character.jsx"


export default function App() {


    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/episode/:id" element={<Episode />} />
                <Route path="/character/:id" element={<Character />} />
            </Routes>
        </div>
    )

}