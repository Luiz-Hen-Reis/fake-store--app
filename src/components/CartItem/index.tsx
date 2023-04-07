import * as Styled from "./styles";
import { CartItem as Item, useCartContext } from "@/contexts/CartContext";

type Props = {
  item: Item;
};

function CartItem({ item }: Props) {
  const { increaseCartQuantity, decreaseCartQuantity, closeCart } =
    useCartContext();

  return (
    <Styled.Container>
      <img src={item.image} alt={item.title} />
      <p>{item.title.substring(0, 20)}...</p>
      <Styled.RightSide>
        <button onClick={() => increaseCartQuantity(item.id)}>+</button>
        <span>{item.quantity}</span>
        <button
          onClick={() => {
            decreaseCartQuantity(item.id), closeCart();
          }}
        >
          -
        </button>
      </Styled.RightSide>
    </Styled.Container>
  );
}

export default CartItem;
