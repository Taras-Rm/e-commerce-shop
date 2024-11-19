import React from "react";
import CartProductItem from "./CartProductItem/CartProductItem";
import { CartItem } from "@/types/types";

interface CartProductsProps {
  cartProducts: CartItem[];
}

function CartProducts({ cartProducts }: CartProductsProps) {
  return (
    <div>
      <div className="grid grid-cols-12 text-[15px] uppercase font-medium pb-[20px] border-b-2 border-[#e9e9e9] text-center">
        <div className="col-span-6 px-[10px]">Product</div>
        <div className="col-span-1 px-[10px]">Price</div>
        <div className="col-span-2 px-[10px]">Amount</div>
        <div className="col-span-3 px-[10px]">Interim Summary</div>
      </div>
      <div>
        {cartProducts.map((product) => (
          <CartProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            amount={product.count}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CartProducts;
