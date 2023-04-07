import Image from "next/image";
import * as Styled from "./styles";
import { useCartContext } from "@/contexts/CartContext";

function Header() {
  const { cartQuantity, openCart } = useCartContext();

  return (
    <Styled.Container>
      <Image
        src="/assets/svg/next.svg"
        alt="NextJS Logo"
        width={100}
        height={20}
      />
      <Styled.RightSide>
        <span onClick={openCart}>You added {cartQuantity} items</span>
      </Styled.RightSide>
    </Styled.Container>
  );
}

export default Header;
