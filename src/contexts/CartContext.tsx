import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addItemToCart: (newItem: CartItem) => void;
  handleCart: () => void;
};

export function useCartContext() {
  return useContext(CartContext);
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: Props) {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  const cartItems: CartItem[] = [];

  function addItemToCart(newItem: CartItem) {
    if (!cartItems.includes(newItem)) {
      return cartItems.unshift(newItem);
    }
  }

  function handleCart() {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
}
