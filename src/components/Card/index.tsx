import * as Styled from "./styles";
import { Product } from "@/types/product";
import { useCartContext } from "@/contexts/CartContext";
import { useEffect, useState } from "react";

type Props = {
  product: Product;
};

function Card({ product }: Props) {
  const [cancelBtn, setCancelBtn] = useState(false);
  const { addItemToCart, removeFromCart, cartItems } = useCartContext();

  useEffect(() => {
    if (cartItems.find(item => item.id === product.id) == null) {
      setCancelBtn(false)
    }

  }, [cartItems])


  function handleCartItem(product: Product) {
    if (cartItems.find((item) => item.id === product.id) == null) {
      addItemToCart({
        ...product, quantity: 1,
        totalItemPrice: parseFloat(product.price)
      });
      setCancelBtn(true);
    } else {
      removeFromCart(product.id);
      setCancelBtn(false);
    }
  }

  return (
    <Styled.Container>
      <img src={product.image} />
      <b>$ {Number(product.price).toFixed(2)}</b>
      <h1>{product.title}</h1>
      <p>{product.description.substring(0, 112)}....</p>
      <button onClick={() => handleCartItem(product)}>
        {cancelBtn ? "Cancel" : "Add to Cart"}
      </button>
    </Styled.Container>
  );
}

export default Card;
