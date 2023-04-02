import { Product } from "@/types/product";
import * as Styled from "./styles";

type Props = {
  product: Product;
};

function Card({ product }: Props) {
  return (
    <Styled.Container>
      <Styled.ImgContainer>
        <img src={product.image} />
      </Styled.ImgContainer>
      <p>{product.title}</p>
    </Styled.Container>
  );
}

export default Card;
