import React from "react";
import { Flip, toast } from "react-toastify";
import { ProductsStyled, UlStyled } from "./styles";

const ProductsList = ({
  products,
  setCartProducts,
  cartProducts,
  searchProduct,
}) => {
  const handleAddToCart = (idProduct) => {
    const productFiltered = products.filter(
      (product) => product.id === idProduct
    );
    cartProducts.every((product) => product.id !== idProduct) ?
      setCartProducts((oldProducts) => [
        ...oldProducts.concat(productFiltered),
      ])
      :
      toast.error('Produto já está no carrinho', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        })
  };

  return (
    <UlStyled>
      {products
        .filter((product) => {
          if (searchProduct === "") {
            return product;
          } else if (
            product.name.toLowerCase().includes(searchProduct.toLowerCase())
          ) {
            return product;
          } else if (
            product.category.toLowerCase().includes(searchProduct.toLowerCase())
          ) {
            return product;
          }
        })
        .map((product) => (
          <ProductsStyled key={product.id}>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>
            <div>
              <h2>{product.name}</h2>
              <h3>{product.category}</h3>
              <h4>R$ {product.price.toFixed(2)}</h4>
              <button onClick={() => handleAddToCart(product.id)}>
                Adicionar
              </button>
            </div>
          </ProductsStyled>
        ))}
    </UlStyled>
  );
};

export default ProductsList;
