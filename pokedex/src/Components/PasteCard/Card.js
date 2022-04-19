
import React from 'react';
import { BiggerContainer, SmallerContainer, StatsCard, GeneralStyledDiv } from './StyledCard';
function Card(props) {

  return (
    <GeneralStyledDiv>
        
        <BiggerContainer>
            <SmallerContainer>
              imagem pokemon
            </SmallerContainer>
            <StatsCard>
                statusPokemon
            <SmallerContainer src={props.pokemon.name} alt={props.pokemon.name}/>
            <StatsCard>
                {props.pokemon.name.toUpperCase()}
            </StatsCard>
        </BiggerContainer>
    </GeneralStyledDiv>
  )
}

export default Card