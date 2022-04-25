
import React from 'react';
import { BiggerContainer, SmallerContainer, StatsCard, GeneralStyledDiv, ContainerButton, ContainerButtonIndividual } from './StyledCard';

function Card(props) {

  return (
    <GeneralStyledDiv>
        <BiggerContainer>
          <SmallerContainer src={props.pokemon.name} alt={props.pokemon.name}/>
          <StatsCard>
            <b> {props.pokemon.name.toUpperCase()} </b>
          </StatsCard>
          <ContainerButton>
            <ContainerButtonIndividual onClick={() => {props.addOuRemoverPokedex(props.pokemon)}}> <b> {props.funcao} </b></ContainerButtonIndividual>
            <ContainerButtonIndividual> <b> DETALHES </b> </ContainerButtonIndividual>
          </ContainerButton>
        </BiggerContainer>
    </GeneralStyledDiv>
  )
}

export default Card