import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {goToHomePage} from "../../Router/Coodinator"
import Header from "../../components/PasteHeader/Header";
import {GlobalStateContext} from "../../global/GlobalStateContext";
import Card from "../../components/PasteCard/Card";
import {ContainerPokedex} from "./StyledPokedexPage"


export const PokedexPage = () => {
    const navigate = useNavigate()
    const { pokedex } = useContext(GlobalStateContext);


    return(
        <>
            <Header
        title={"Pokédex"}
        leftButtonFunction={() => goToHomePage (navigate)}
      />
        <ContainerPokedex>
        {pokedex &&
          pokedex.map((poke) => {
            return <Card isPokedex key={poke.name} poke={poke} />;
          })}    
        </ContainerPokedex>
        </>
    )
}