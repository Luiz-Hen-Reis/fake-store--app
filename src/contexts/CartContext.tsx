import { Product } from "@/types/product";
import {
  MouseEventHandler,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type CartContextType = {
  cartItems: Product[];
  addItemToCart: (newItem: Product) => void;
  handleCart: () => void;
  cartIsOpen: boolean;
};

export function useCartContext() {
  return useContext(CartContext);
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: Props) {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addItemToCart(newItem: Product) {
    let newCartList = cartItems;
    newCartList.unshift(newItem);

    setCartItems(newCartList);
    console.log(cartItems);
  }

  function handleCart() {
    setCartIsOpen(!cartIsOpen);   
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, handleCart, cartIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}
