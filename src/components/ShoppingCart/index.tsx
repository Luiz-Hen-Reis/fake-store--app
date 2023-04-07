import { useCartContext } from '@/contexts/CartContext';
import * as Styled from './styles';
import CartItem from '../CartItem';

function ShoppingCart() {
  const { cartItems, closeCart } = useCartContext();

  return (
    <Styled.Container>
      <Styled.Header>
      <h1>Cart</h1>
      <Styled.CloseBtn onClick={closeCart}>
        <span></span>
        <span></span>
      </Styled.CloseBtn>
      </Styled.Header>
      {cartItems.length === 0 &&
          <p>No items added in your cart</p>
        }
      <Styled.GridContainer>
        {cartItems.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </Styled.GridContainer>
    </Styled.Container>
  )
}

export default ShoppingCart