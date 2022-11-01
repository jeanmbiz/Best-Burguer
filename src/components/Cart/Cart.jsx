import React from "react";
import EmptyCart from "../EmptyCart/EmptyCart";
import FullCart from "../FullCart/FullCart";
import { CartSyled } from "./styles";

const Cart = ({ cartProducts, setCartProducts }) => (
  <CartSyled>
    <div className="cartHeader">
      <h2>Carrinho de compras</h2>
    </div>

    {cartProducts.length > 0 ? (
      <FullCart cartProducts={cartProducts} setCartProducts={setCartProducts} />
    ) : (
      <EmptyCart />
    )}
  </CartSyled>
);

export default Cart;
