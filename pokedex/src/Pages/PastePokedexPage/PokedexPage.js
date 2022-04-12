import React from "react";
import { useNavigate } from "react-router-dom";

import {goToDetailPage, goToHomePage} from "../Router/Coodinator"

export function PokedexPage (){
    const navigate = useNavigate()

    return(
        <div>
            PokedexPage
            <button onClick={() => goToDetailPage(navigate)}> Detail </button>
            <button onClick={() => goToHomePage(navigate)}> Home </button>
        </div>
    )
}