import Image from "next/image";
import * as Styled from "./styles";
import { useCartContext } from "@/contexts/CartContext";

function Header() {
  const { cartItems } = useCartContext();

  return (
    <Styled.Container>
      <Image src="/assets/svg/next.svg" alt="NextJS Logo" width={100} height={20} />
      <Styled.RightSide>
        <input type="text" placeholder="Enter product name" />
        <span>You added {cartItems.length} items</span>
      </Styled.RightSide>
    </Styled.Container>
  );
}

export default Header;
