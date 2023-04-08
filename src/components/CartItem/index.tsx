import * as Styled from "./styles";
import { CartItem as Item, useCartContext } from "@/contexts/CartContext";

type Props = {
  item: Item;
};

function CartItem({ item }: Props) {
  const { increaseCartQuantity, decreaseCartQuantity } =
    useCartContext();

  function priceItem(): number {
    item.totalItemPrice = parseFloat(item.price) * item.quantity;

    return item.totalItemPrice;
  }

  return (
    <Styled.Container>
      <img src={item.image} alt={item.title} />
      <Styled.Title>
        <p>{item.title.substring(0, 20)}...</p>
        <b>$ {priceItem().toFixed(2)}</b>
      </Styled.Title>
      <Styled.RightSide>
        <button onClick={() => increaseCartQuantity(item.id)}>+</button>
        <span>{item.quantity}</span>
        <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
      </Styled.RightSide>
    </Styled.Container>
  );
}

export default CartItem;
