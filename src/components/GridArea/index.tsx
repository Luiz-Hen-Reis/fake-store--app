import * as Styled from './styles';
import { Product } from '@/types/product'
import Card from '../Card';

type Props = {
    products: Product[];
}

const GridArea = ({ products }: Props) => {
  return (
    <Styled.Container>{products.map((product) => (
        <Card product={product} key={product.id} />
    ))}</Styled.Container>
  )
}

export default GridArea