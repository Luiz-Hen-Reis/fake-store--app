import { Product } from "@/types/product";
import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export interface CartItem extends Product {
  quantity: number;
  totalItemPrice: number;
}

type CartContextType = {
  cartItems: CartItem[];
  cartQuantity: number;
  addItemToCart: (newItem: CartItem) => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  closeCart: () => void;
  openCart: () => void;
  isOpen: boolean;
};

export function useCartContext() {
  return useContext(CartContext);
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function addItemToCart(newItem: CartItem) {
    setCartItems([...cartItems, newItem]);
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addItemToCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
