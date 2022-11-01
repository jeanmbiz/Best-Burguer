import React from "react";
import { HeaderStyled } from "./styles";
import logo from "../../assets/logo.svg";

const Header = ({ setsearchProduct }) => {
  return (
    <HeaderStyled>
      <div className="mainContainer">
        <figure>
          <img src={logo} alt="Logo Burguer Kenzie" />
        </figure>
        <div>
          <input
            onChange={(event) => setsearchProduct(event.target.value)}
            type="text"
            placeholder="Digitar Pesquisa"
          />
          <button>Pesquisar</button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
