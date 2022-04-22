import React, { useContext, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import Card from "../../components/PasteCard/Card"
import {goToPokedexPage, goToDetailPage} from "../Router/Coodinator"
import styled from "styled-components";
import { GlobalStateContext } from '../../global/GlobalStateContext'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 40px;

`


export function HomePage (){
    const navigate = useNavigate()

    const { states, requests } = useContext(GlobalStateContext)
    const pokelist = states.pokelist


    const listPokemons = requests
    const pokedex = states
    const setPokedex = setters

    useEffect(() => {
       listPokemons()
    }, [])

    console.log(pokelist)

    const addPokeToPokedex = (newPoke) => {
        const newPokedex = [...pokedex]
        newPokedex.push(newPoke)
        setPokedex(newPokedex)
    }

   
    const renderedPokemons = pokelist && pokelist.map((poke) => {

        return(
            <div>
                <Card key={poke.name} id={poke.name} pokemon={poke} />
            </div>
        )

    })
    
    return(
        <div>
            <Container>
                {renderedPokemons}
            </Container>
            <button onClick={() => goToPokedexPage(navigate)}> Pokedex </button>
            <button onClick={() => goToDetailPage(navigate)}> Detail </button>
        </div>
    )
}