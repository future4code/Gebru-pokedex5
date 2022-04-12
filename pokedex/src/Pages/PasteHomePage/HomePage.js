import React from "react";
import {useNavigate} from "react-router-dom"

import {goToPokedexPage, goToDetailPage} from "../Router/Coodinator"

export function HomePage (){
    const navigate = useNavigate()

    return(
        <div>
            HomePage
            <button onClick={() => goToPokedexPage(navigate)}> Pokedex </button>
            <button onClick={() => goToDetailPage(navigate)}> Detail </button>
        </div>
    )
}