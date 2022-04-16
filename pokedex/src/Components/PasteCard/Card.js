import React from 'react';
import { BiggerContainer, SmallerContainer, StatsCard, GeneralStyledDiv } from './StyledCard';

function Card() {
  return (
    <GeneralStyledDiv>
        
        <BiggerContainer>
            <SmallerContainer>
                IMG
            </SmallerContainer>
            <StatsCard>
                Stats Pokemon
            </StatsCard>
        </BiggerContainer>
    </GeneralStyledDiv>
  )
}

export default Card