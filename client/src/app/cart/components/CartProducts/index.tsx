import React from "react";
import CartProductItem from "./CartProductItem/CartProductItem";

function CartProducts() {
  return (
    <div>
      <div className="grid grid-cols-12 text-[15px] uppercase font-medium pb-[20px] border-b-2 border-[#e9e9e9] text-center">
        <div className="col-span-6 px-[10px]">Product</div>
        <div className="col-span-1 px-[10px]">Price</div>
        <div className="col-span-2 px-[10px]">Amount</div>
        <div className="col-span-3 px-[10px]">Interim Summary</div>
      </div>
      <div>
        <CartProductItem name="Hello tom" price={100} amount={12} />
        <CartProductItem name="Hello bob" price={45} amount={2} />
      </div>
    </div>
  );
}

export default CartProducts;
