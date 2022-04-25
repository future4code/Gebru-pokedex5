import React, { useContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import Card from "../../Components/PasteCard/Card"
import { UrlBase } from "../../Constants/Urls/UrlBase"
import {goToPokedexPage} from "../Router/Coodinator"

import {ContainerPokedex, PositionButton, ContainerButton} from "./StyledHomePage"
import Pokedex from "../../Constants/Image/Pokedex.png"


export function HomePage (props){
    const navigate = useNavigate()
    const [ pokelist, setPokelist ] = useState([])
    const { pokedex, setPokedex } = props

    useEffect(() => {
       listPokemons()
    }, [])

    const listPokemons = () => {
        axios
            .get(`${UrlBase}?limit=20`)
            .then((res) => {
                setPokelist(res.data.results)
            })
            .catch((err) => {
                alert("Deu erro!")
            })
    }


    const addPokeToPokedex = (newPoke) => {
        //Lógica sem verificação de repetição de pokemon
        // const newPokedex = [...pokedex]
        // newPokedex.push(newPoke)
        // setPokedex(newPokedex)

        //Verificando se pokemon repete
        const index = pokedex.findIndex((i) => i.name === newPoke.name)

        const newPokedex = [...pokedex]
        const newPokelist = [...pokelist]

        if(index === -1){
            const listPokemon = {...newPoke, amount: 1}
            newPokedex.push(listPokemon)
        }

        if(index === 1){
            newPokelist.splice(index, 1)
        }

        setPokelist(newPokelist)
        setPokedex(newPokedex)    
    }

   
    const renderedPokemons = pokelist && pokelist.map((poke) => {

        return(
            <div>
                <Card key={poke.name} 
                    id={poke.name} 
                    pokemon={poke} 
                    addOuRemoverPokedex={addPokeToPokedex} 
                    funcao={'ADICIONAR A POKEDEX'}
                />
            </div>
        )

    })

    return(
        <ContainerPokedex>
            {renderedPokemons}

            <PositionButton>
                <ContainerButton onClick={() => goToPokedexPage(navigate)}> 
                    <img width='30px' src={Pokedex} alt="HOME"/>
                </ContainerButton>
            </PositionButton>                
            
        </ContainerPokedex>
        
    )
}