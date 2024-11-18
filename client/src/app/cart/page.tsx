import React from "react";
import CartSummary from "./components/CartSummary";

function CartPage() {
  return (
    <div className="grid grid-cols-5 space-x-6 py-[40px] text-[14px]">
      <div className="col-span-3">Content</div>
      <div className="col-span-2">
        <CartSummary />
      </div>
    </div>
  );
}

export default CartPage;
