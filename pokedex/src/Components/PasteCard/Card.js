
import React from 'react';
import { BiggerContainer, SmallerContainer, StatsCard, GeneralStyledDiv } from './StyledCard';

function Card(props) {

  return (
    <GeneralStyledDiv>
        
        <BiggerContainer>
            <SmallerContainer>
              <img src={props.pokemon.name} alt={props.pokemon.name} />
            </SmallerContainer>
            <StatsCard>
                statusPokemon
                {props.pokemon.name.toUpperCase()}
            </StatsCard>
            <button onClick={() => {addPokeToPokedex(props.pokemon)}}>ADICIONAR A POKEDEX</button>
        </BiggerContainer>
    </GeneralStyledDiv>
  )
}

export default Card