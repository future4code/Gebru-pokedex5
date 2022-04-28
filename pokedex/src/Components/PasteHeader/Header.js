import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {goToPokedexPage} from "../../Router/Coodinator";

const NavBar = styled.nav`
  background-color: #f01d1eff;
  padding: 0px 30px 0px 0px;
  border-bottom: 10px solid #000;
  height: 75px;
`;

const ImgLogo = styled.img`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 8vh;
`;

const BallDetails = styled.div`
  position: absolute;
  background-color: white;
  width: 50px;
  height: 50px;
  margin-left: 650px;
  border-radius: 100px;
  border: 4px ridge black;
`;

const BallDetails2 = styled.div`
  position: absolute;
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 80px;
  border: 5px ridge black;
  &&:hover {
    box-shadow: 0px 0px 5px black;
    transition: 0.3s;
    background-color: black;
  }
`;


const LeftHeaderButton = styled.button`
  position: absolute;
  left: 20px;
`;

const RightHeaderButton = styled.button`
  position: absolute;
  right: 20px;
`;

const Header = ({ leftButtonFunction, title, rightButton }) => {
const navigate = useNavigate();

const leftButtonTitle = () => {
  switch (title) {
    case "Lista de Pokémons":
      return "Ir para Pokedex";
    case "Pokédex":
      return "Voltar para lista de pokemons";
    default:
      return "Voltar";
  }
};

  return (
    <div>
      <NavBar>
        <ImgLogo
          src="https://fontmeme.com/permalink/220414/944af84d36cbee225d81dbaf94d65a11.png"
          alt="fonte-de-pokemon"
          border="0"
        />
        <BallDetails>
          <BallDetails2 />
        </BallDetails>   

        <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      {rightButton && (
        <RightHeaderButton onClick={() => goToPokedexPage(navigate)}>
          Ir para pokedex
        </RightHeaderButton>
      )}
      </NavBar>
      
    </div>
  );
}

export default Header;
