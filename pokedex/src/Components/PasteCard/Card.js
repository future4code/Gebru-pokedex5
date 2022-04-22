
import React from 'react';
import { BiggerContainer, SmallerContainer, StatsCard, GeneralStyledDiv } from './StyledCard';


function Card(props) {

  return (
    <GeneralStyledDiv>
        <BiggerContainer>

          <SmallerContainer src={props.pokemon.name} alt={props.pokemon.name}/>
          <StatsCard>
            {props.pokemon.name.toUpperCase()}
          </StatsCard>
          <button onClick={() => {props.addPokeToPokedex(props.pokemon)}}>ADICIONAR A POKEDEX</button>

        </BiggerContainer>
        <button>Remover</button>
        <button></button>
    </GeneralStyledDiv>
  )
}

export default Card