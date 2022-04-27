
import React, { useContext } from 'react';
import {   CardContainer,
  ImgContainer,
  PokeImg,
  ButtonsContainer } from './StyledCard';
import {useNavigate} from "react-router-dom";
import {goToDetailPage} from "../../Router/Coodinator"
import {GlobalStateContext} from "../../global/GlobalStateContext";

const Card = (props) => { 
  const navigate = useNavigate();
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
    GlobalStateContext
  );

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex(
      (item) => item.name === props.poke.name
    );
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.poke];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.poke.name
    );

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonsList = [...pokemons, props.poke];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };


  return (
    <CardContainer>
    <ImgContainer>
      <PokeImg
        src={props.poke && props.poke.sprites.front_default}
        alt={props.poke.name}
      />
    </ImgContainer>
    <ButtonsContainer>
      <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
        {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
      </button>
      <button
        onClick={() =>
          goToDetailPage(navigate, props.poke.name, props.isPokedex)
        }
      >
        Ver detalhes
      </button>
    </ButtonsContainer>
  </CardContainer>

);
};


export default Card