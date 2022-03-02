import React from "react";
import { useParams } from "react-router-dom";



export default function Episode() {

    const { id } = useParams();

    return (
        <div className="app" >
            {id}
        </div>
    )


}