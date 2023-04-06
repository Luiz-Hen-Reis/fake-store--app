import { Product } from "@/types/product";
import * as Styled from "./styles";
import { useCartContext } from "@/contexts/CartContext";

type Props = {
  product: Product;
};

function Card({ product }: Props) {
  const { addItemToCart } = useCartContext();

  return (
    <Styled.Container>
        <img src={product.image} />
      <b>$ {Number(product.price).toFixed(2)}</b>
      <h1>{product.title}</h1>
      <p>{product.description.substring(0, 112)}....</p>
      <button onClick={() => addItemToCart(product)}>Add to Cart</button>
    </Styled.Container>
  );
}

export default Card;
