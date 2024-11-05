import { CartItem } from "@/types/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type ChangeProductOperation = "add" | "remove";

type ContextType = {
  cartProducts: CartItem[];
  changeProductCount: (
    item: Omit<CartItem, "count">,
    count: number,
    operation: ChangeProductOperation
  ) => void;
  removeProduct: (id: number) => void;
  getTotalCost: () => number;
};

const CartContext = createContext<ContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("context has to be used within <CartContext.Provider>");
  }

  return context;
};

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  const changeProductCount = (
    item: Omit<CartItem, "count">,
    count: number,
    operation: ChangeProductOperation
  ) => {
    const newProducts: CartItem[] = [];

    let isProductFound = false;

    cartProducts.forEach((product) => {
      if (product.id === item.id) {
        isProductFound = true;

        newProducts.push({
          ...product,
          count:
            operation === "add" ? product.count + count : product.count - 1,
        });
      } else {
        newProducts.push(product);
      }
    });

    if (!isProductFound) {
      newProducts.push({ ...item, count });
    }

    return setCartProducts(newProducts.filter((product) => product.count > 0));
  };

  const removeProduct = (id: number) => {
    setCartProducts((products) => {
      return products.filter((product) => product.id !== id);
    });
  };

  const getTotalCost = () => {
    return cartProducts.reduce(
      (cost, product) => cost + product.count * product.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, changeProductCount, removeProduct, getTotalCost }}
    >
      {children}
    </CartContext.Provider>
  );
};
