import React, { useContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import Card from "../../components/PasteCard/Card";
import {goToPokedexPage} from "../../Router/Coodinator"
import {ContainerPokedex} from "./StyledHomePage"
import {GlobalStateContext} from "../../global/GlobalStateContext";
import Header from "../../components/PasteHeader/Header";

export function HomePage (props){
    const navigate = useNavigate()
    const { pokemons } = useContext(GlobalStateContext);

    return(
        <>
        <Header 
         title={"Lista de Pokémons"}
        leftButtonFunction={() => goToPokedexPage(navigate)}
         />
        <ContainerPokedex>
             {pokemons &&
          pokemons.map((poke) => {
            return <Card key={poke.name} poke={poke} />;
          })}
        </ContainerPokedex>
        </>
    )
}