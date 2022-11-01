import React from "react";
import { EmptyCartStyled } from "./styled";

const EmptyCart = () => {
  return (
    <EmptyCartStyled>
      <h2>Sua sacola está vazia</h2>
      <h3>Adicione itens</h3>
    </EmptyCartStyled>
  );
};

export default EmptyCart;
