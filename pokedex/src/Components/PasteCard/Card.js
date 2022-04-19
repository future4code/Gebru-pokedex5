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
            </StatsCard>
        </BiggerContainer>
    </GeneralStyledDiv>
  )
}

export default Card