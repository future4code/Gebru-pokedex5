import React, {useEffect} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

import {goToHomePage} from "../Router/Coodinator"
import Home from "../../Constants/Image/Home.png"

import Card from '../../Components/PasteCard/Card'
import {ContainerPokedex, ContainerButton, PositionButton} from "./StyledPokedexPage"


export function PokedexPage (props){
    const navigate = useNavigate()
    const { pokedex, setPokedex} = props

    const removePokemonfromPokedex = (pokemonToRemove) => {
        const index = pokedex.findIndex((i) => i.id === pokemonToRemove.id)

        const newListPokedex = [...pokedex]
        

        if(newListPokedex[index].amount === 1){

            newListPokedex.splice(index, 1)
        }

        setPokedex(newListPokedex)
    }

    console.log(pokedex)

    const renderedPokemon = pokedex.map((poke) => {
        return(
                <Card 
                    key={poke.name}
                    id={poke.name}
                    name={poke.name}
                    pokemon={poke}
                    addOuRemoverPokedex={removePokemonfromPokedex}
                    funcao={'REMOVER POKEDEX'}
                />
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