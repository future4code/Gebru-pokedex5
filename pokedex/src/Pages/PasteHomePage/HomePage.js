import React, { useContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import Card from "../../Components/PasteCard/Card"
import {goToPokedexPage, goToDetailPage} from "../Router/Coodinator"
import styled from "styled-components";
import axios from "axios"
import { UrlBase } from "../../Constants/Urls/UrlBase"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 40px;

`


export function HomePage (){
    const navigate = useNavigate()
    const [ pokelist, setPokelist ] = useState([])
    const [ pokedex, setPokedex] = useState([]);

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
        const newPokedex = [...pokedex]
        newPokedex.push(newPoke)
        setPokedex(newPokedex)
    }

    console.log(pokedex)
   
    const renderedPokemons = pokelist && pokelist.map((poke) => {

        return(
            <div>
                <Card key={poke.name} id={poke.name} pokemon={poke} addPokeToPokedex={addPokeToPokedex} />
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