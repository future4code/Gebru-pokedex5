import React, { useContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import Card from "../../components/PasteCard/Card"
import {goToPokedexPage, goToDetailPage} from "../Router/Coodinator"
import styled from "styled-components";
import axios from "axios"
import { BASE_URL } from "../constants/url"

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

    const listPokemons = () => {
        axios
            .get(`${BASE_URL}?limit=20`)
            .then((res) => {
                setPokelist(res.data.results)
            })
            .catch((err) => {
                alert("Deu erro!")
            })
    }


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