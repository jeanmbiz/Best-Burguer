import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import ProductsList from "../ProductsList/ProductsList";
import { MainStyled } from "./styles";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchProduct, setsearchProduct] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header setsearchProduct={setsearchProduct} />

      <MainStyled className="mainContainer ">
        <ProductsList
          searchProduct={searchProduct}
          products={products}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </MainStyled>
    </div>
  );
};

export default Dashboard;
