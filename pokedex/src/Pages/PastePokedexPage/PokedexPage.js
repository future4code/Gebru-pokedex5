import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {useRequestData} from "../../Hooks/useRequestData"
import {UrlBase} from "../../Constants/Urls/UrlBase"

import {goToHomePage} from "../Router/Coodinator"
import Home from "../../Constants/Image/Home.png"

import Card from '../../Components/PasteCard/Card'
import {ContainerPokedex, ContainerButton, PositionButton} from "./StyledPokedexPage"


export function PokedexPage (props){
    const navigate = useNavigate()

    // const {arrayPokemonMatch, setArrayPokemonMatch} = props
    
    const arrayPokemonMatch = [1, 2, 4, 25, 50, 100]

    const renderedPokemon = arrayPokemonMatch && arrayPokemonMatch.map((pokemon) => {
        return(
            <div>
                <Card key={pokemon} 
                    name={pokemon}
                />  
            </div>
        )  
    })

    return(
        <ContainerPokedex>   
            {renderedPokemon}
            <PositionButton>
                <ContainerButton onClick={() => goToHomePage(navigate)}> 
                    <img width='30px' src={Home} alt="HOME"/>
                </ContainerButton>
            </PositionButton>
                
        </ContainerPokedex>
    )
}

{/* <a href="https://www.flaticon.com/br/icones-gratis/botao-home" title="botão home ícones">Botão home ícones criados por inkubators - Flaticon</a> */}