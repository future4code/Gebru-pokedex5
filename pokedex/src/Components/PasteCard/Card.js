import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BiggerContainer, SmallerContainer, StatsCard, GeneralStyledDiv } from './StyledCard';

function Card(props) {
    
  return (
    <GeneralStyledDiv>
        
        <BiggerContainer>
            <SmallerContainer src={props.pokemon.name} alt={props.pokemon.name}/>
            <StatsCard>
                {props.pokemon.name.toUpperCase()}
            </StatsCard>
        </BiggerContainer>
    </GeneralStyledDiv>
  )
}

export default Card