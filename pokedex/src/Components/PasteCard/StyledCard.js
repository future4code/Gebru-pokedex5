import styled from "styled-components";


export const GeneralStyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
` 
export const BiggerContainer = styled.div`
  background-color: #eff0f4;
  width: 33vh;
  height: 40vh;
  box-shadow: 0px 0px 5px;
  padding: 10px;
  border-radius: 5px;
`;
export const SmallerContainer = styled.img`
 display: flex;
 justify-content: center;

 margin-top: 30px;
 width: 50%;
 height: 60%;
`;

export const StatsCard = styled.div`
 /* background-color: white; */
 width: 100%;
 height: 10%;
 border-radius: 5px;
 text-align: center;
 font-family: sans-serif;
 font-size: 20px;
`

export const ContainerButton = styled.div`
  display: flex;
  padding: 8% 0px;
`

export const ContainerButtonIndividual = styled.button`
  background-color: #eff0f4;

  width: 50%;
  border: 1px solid black;
  box-shadow: 0px 0px 5px gray;

  :hover{
    background-color: gray;
    color: yellow;
  }
`