import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {GlobalStateContext} from "../../global/GlobalStateContext";
import {
  TypeAndMovesContainer,
  PokeInfosContainer,
  ImgWrapper,
  ImagesContainer,
  StatsContainer,
  TitleContainer,
  TypesContainer,
  MovesContainer
} from "./StyledDetailPage";
import Header from "../../components/PasteHeader/Header";
import { BASE_URL } from "../../Constants/Urls/UrlBase";
import {goToPokedexPage} from "../../Router/Coodinator"
import {useNavigate} from "react-router-dom"
import axios from "axios";

export const DetailPage = () => {
    const navigate = useNavigate()
    const { name, telaPokedex } = useParams();
    const { pokemons, pokedex } = useContext(GlobalStateContext);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
      let current = [];
      if (telaPokedex) {
        current = pokedex.find((item) => {
          return item.name === name;
        });
      } else {
        current = pokemons.find((item) => {
          return item.name === name;
        });
      }
  
      if (!current) {
        axios
          .get(`${BASE_URL}/pokemon/${name}`)
          .then((res) => setSelectedPokemon(res.data))
          .catch((err) => console.log(err.response.message));
      } else {
        setSelectedPokemon(current);
      }
    }, []);
  
    return (
      <div>
        <Header
           leftButtonFunction={() => goToPokedexPage(navigate)}/>
        {selectedPokemon && selectedPokemon.sprites && (
          <PokeInfosContainer>
            <ImagesContainer>
              <ImgWrapper src={selectedPokemon.sprites.front_default} />
              <ImgWrapper src={selectedPokemon.sprites.back_default} />
            </ImagesContainer>
            <StatsContainer>
              <TitleContainer>Poderes</TitleContainer>
              {selectedPokemon &&
                selectedPokemon.stats.map((stat) => {
                  return (
                    <p key={stat.stat.name}>
                      <strong>{stat.stat.name}: </strong>
                      {stat.base_stat}
                    </p>
                  );
                })}
            </StatsContainer>
            <TypeAndMovesContainer>
              <TypesContainer>
                {selectedPokemon &&
                  selectedPokemon.types.map((type) => {
                    return <p key={type.type.name}>{type.type.name}</p>;
                  })}
              </TypesContainer>
              <MovesContainer>
                <TitleContainer>Principais ataques</TitleContainer>
                {selectedPokemon &&
                  selectedPokemon.moves.map((move, index) => {
                    return (
                      index < 5 && <p key={move.move.name}>{move.move.name}</p>
                    );
                  })}
              </MovesContainer>
            </TypeAndMovesContainer>
          </PokeInfosContainer>
        )}
      </div>
    );
  };
  
  
