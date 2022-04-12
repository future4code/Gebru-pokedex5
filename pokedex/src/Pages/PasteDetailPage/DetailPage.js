import React from "react";
import { useNavigate } from "react-router-dom";

import {goToBack} from "../Router/Coodinator"

export function DetailPage (){
    const navigate = useNavigate()

    return(
        <div>
            DetailPage
            <button onClick={() => goToBack(navigate)}> Voltar </button>
        </div>
    )
}