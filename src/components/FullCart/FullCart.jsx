import React from "react";
import { FooterCartStyled, FullCartStyled } from "./styles";

const FullCart = ({ cartProducts, setCartProducts }) => {
  const totalValue = cartProducts
    .reduce((acc, va) => acc + va.price, 0)
    .toFixed(2);

  const handleCartRemover = (idProduct) => {
    const productFiltered = cartProducts.filter(
      (product) => product.id !== idProduct
    );
    setCartProducts(productFiltered);
  };

  const handleRemoveAll = () => {
    setCartProducts([]);
  };

  return (
    <div>
      <FullCartStyled>
        {cartProducts.map((cartProduct) => (
          <li key={cartProduct.id}>
            <figure>
              <img src={cartProduct.img} alt={cartProduct.name} />
            </figure>
            <section>
              <div>
                <h2>{cartProduct.name}</h2>
                <h3>{cartProduct.category}</h3>
              </div>
              <button onClick={() => handleCartRemover(cartProduct.id)}>
                Remover
              </button>
            </section>
          </li>
        ))}
      </FullCartStyled>

      <FooterCartStyled>
        <div>
          <h2>Total</h2>
          <h3>R$ {totalValue}</h3>
        </div>
        <button onClick={() => handleRemoveAll()}>Remover Todos</button>
      </FooterCartStyled>
    </div>
  );
};

export default FullCart;
