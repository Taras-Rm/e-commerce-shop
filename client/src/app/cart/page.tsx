import React from "react";
import CartSummary from "./components/CartSummary";
import CartProducts from "./components/CartProducts";

function CartPage() {
  return (
    <div className="grid grid-cols-5 space-x-8 py-[40px] text-[14px]">
      <div className="col-span-3">
        <CartProducts />
      </div>
      <div className="col-span-2">
        <CartSummary />
      </div>
    </div>
  );
}

export default CartPage;
