import styled from "styled-components";

export const ContainerPokedex = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    padding: 5%;

    grid-column-gap: 4%;
    grid-row-gap: 4%;
`

export const ContainerButton = styled.button`
    background-color: #ffcc03;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #3D7DCA;

    :hover{
        background-color: red;
    }
`
export const PositionButton = styled.div`
    position: fixed;
    right: 0;
    width: 80px;

    margin-top: -135px;
`