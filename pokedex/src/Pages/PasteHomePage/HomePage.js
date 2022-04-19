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
    const pokelist = states
    const listPokemons = requests

    useEffect(() => {
       listPokemons()

    }, [])

    console.log(pokelist)

   
    const renderedPokemons = pokelist && pokelist.map((poke) => {
        return <Card key={poke.name} id={poke.name} pokemon={poke} />
    })
    
    return(
        <div>
            <Container>{renderedPokemons}</Container>
            <button onClick={() => goToPokedexPage(navigate)}> Pokedex </button>
            <button onClick={() => goToDetailPage(navigate)}> Detail </button>
        </div>
    )
}