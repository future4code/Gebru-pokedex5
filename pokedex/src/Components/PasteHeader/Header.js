import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  background-color: #f01d1eff;
  padding: 8px 40px 8px 8px;
  border-bottom: 10px solid #000;
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
  margin-left: 600px;
  margin-top: -15px;
  z-index: 2;
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
  border-radius: 100px;
  border: 5px ridge black;
  &&:hover {
    box-shadow: 0px 0px 5px black;
    transition: 0.3s;
    background-color: black;
  }
`;

function Header() {
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
      </NavBar>
      
    </div>
  );
}

export default Header;
