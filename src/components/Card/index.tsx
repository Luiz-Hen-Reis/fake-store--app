import { Product } from "@/types/product";
import * as Styled from "./styles";

type Props = {
  product: Product;
};

function Card({ product }: Props) {
  return (
    <Styled.Container>
        <img src={product.image} />
      <b>$ {Number(product.price).toFixed(2)}</b>
      <h1>{product.title}</h1>
      <p>{product.description.substring(0, 112)}....</p>
      <button>Add to Cart</button>
    </Styled.Container>
  );
}

export default Card;
