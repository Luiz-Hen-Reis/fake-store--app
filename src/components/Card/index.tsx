import { Product } from "@/types/product";
import * as Styled from "./styles";
import { useCartContext } from "@/contexts/CartContext";
import { useState } from "react";

type Props = {
  product: Product;
};

function Card({ product }: Props) {
  const [disableBtn, setDisableBtn] = useState(false);
  const { addItemToCart, removeFromCart, cartItems } = useCartContext();

  function handleCartItem(product: Product) {
    if (cartItems.find((item) => item.id === product.id) == null) {
      addItemToCart(product.id);
      setDisableBtn(true);
    } else {
      removeFromCart(product.id);
      setDisableBtn(false);
    }
  }

  return (
    <Styled.Container>
      <img src={product.image} />
      <b>$ {Number(product.price).toFixed(2)}</b>
      <h1>{product.title}</h1>
      <p>{product.description.substring(0, 112)}....</p>
      <button onClick={() => handleCartItem(product)}>
        {disableBtn ? "Cancel" : "Add to Cart"}
      </button>
    </Styled.Container>
  );
}

export default Card;
