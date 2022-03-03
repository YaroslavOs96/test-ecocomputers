import React, { useState } from "react";
import './search-panel.css'

export default function SearchPanel({ onUpdateSearch }) {

    const onInput = (e) => {
        onUpdateSearch(e.target.value)
    };

    return (
        <input
            className="search-input episode-border"
            type="text"
            placeholder="Поиск по эпизодам"
            onChange={onInput}
        />
    )
}