import { useCartContext } from '@/contexts/CartContext';
import * as Styled from './styles';
import { Product } from '@/types/product';
import CartItem from '../CartItem';

type Props = {
  products: Product[];
}

interface NProduct extends Product {
  quantity?: number;
}

function ShoppingCart({ products }: Props) {
  const { cartItems, closeCart } = useCartContext();
  let items: NProduct[] = [];

  cartItems.map(cartItem => {
      items = [...products.filter(i => i.id === cartItem.id)];
  })

  return (
    <Styled.Container>
      <Styled.Header>
      <h1>Cart</h1>
      <Styled.CloseBtn onClick={closeCart}>
        <span></span>
        <span></span>
      </Styled.CloseBtn>
      </Styled.Header>
      {products.length === 0 &&
          <p>No items added in your cart</p>
        }
      <Styled.GridContainer>
        {items.map(item => (
          <CartItem product={item} key={item.id} />
        ))}
      </Styled.GridContainer>
    </Styled.Container>
  )
}

export default ShoppingCart