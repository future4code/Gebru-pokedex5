
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
          <button onClick={() => {props.addPokeToPokedex(props.pokemon)}}>Adicionar</button>
          <button>Remover</button>
        </BiggerContainer>
        
    </GeneralStyledDiv>
  )
}

export default Card