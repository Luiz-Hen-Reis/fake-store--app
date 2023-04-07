import { Product } from '@/types/product';
import * as Styled from './styles';
import { useCartContext } from '@/contexts/CartContext';

type Props = {
  product: Product;
}


function CartItem({ product }: Props){

  return (
    <Styled.Container>
      <img src={product.image} alt={product.title} />

      <div>
        <span>+</span>
        <p>{}</p>
        <span>-</span>
      </div>
      </Styled.Container>
  )
}

export default CartItem;