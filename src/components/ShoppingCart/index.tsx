import * as Styled from "./styles";
import { useCartContext } from "@/contexts/CartContext";
import CartItem from "../CartItem";

function ShoppingCart() {
  const { cartItems, closeCart } = useCartContext();

  const totalCartPrice = cartItems.reduce((total, item) =>  (parseFloat(item.price) * item.quantity) + total, 0)

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Cart</h1>
        <Styled.CloseBtn onClick={closeCart}>
          <span></span>
          <span></span>
        </Styled.CloseBtn>
      </Styled.Header>
      {cartItems.length === 0 && <p>No items added in your cart</p>}
      <Styled.GridContainer>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Styled.GridContainer>
      <Styled.TotalContainer>
        <p>Total</p>
        <b>$ {totalCartPrice.toFixed(2)}</b>
      </Styled.TotalContainer>
    </Styled.Container>
  );
}

export default ShoppingCart;
