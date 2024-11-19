"use client";

import React from "react";
import CartSummary from "./components/CartSummary";
import CartProducts from "./components/CartProducts";
import { useCart } from "@/context/CartContext";

function CartPage() {
  const { cartProducts, getTotalCost } = useCart();
  return (
    <div className="grid grid-cols-5 space-x-8 py-[40px] text-[14px]">
      <div className="col-span-3">
        <CartProducts cartProducts={cartProducts} />
      </div>
      <div className="col-span-2">
        <CartSummary totalPrice={getTotalCost()} />
      </div>
    </div>
  );
}

export default CartPage;
