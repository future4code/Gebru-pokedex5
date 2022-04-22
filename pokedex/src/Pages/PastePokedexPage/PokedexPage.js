import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom"; 

import {goToHomePage} from "../Router/Coodinator"
import Home from "../../Constants/Image/Home.png"

import Card from '../../Components/PasteCard/Card'
import {ContainerPokedex, ContainerButton, PositionButton} from "./StyledPokedexPage"


export function PokedexPage (props){
    const navigate = useNavigate()

    const {ListPokemon, setListPokemon} = props

    const removePokemonfromPokedex = (pokemonToRemove) => {
        const index = cart.findIndex((i) => i.id === pokemonToRemove.id)

        const newListPokemon = [...ListPokemon]

        if(newListPokemon[index].amount === 1){

            newListPokemon.splice(index, 1)
        }

        setListPokemon(newListPokemon)
    }

    const renderedPokemon = arrayPokemonMatch.map((poke) => {
        return(   
            <Card 
                key={poke.name}
                name={poke}
                removePokemonfromPokedex={removePokemonfromPokedex}
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

{/* <a href="https://www.flaticon.com/br/icones-gratis/botao-home" title="botão home ícones">Botão home ícones criados por inkubators - Flaticon</a> */}