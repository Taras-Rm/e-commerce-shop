import React from "react";
import DetailItem from "./DetailItem";

interface CartSummaryProps {
  totalPrice: number;
}

function CartSummary({ totalPrice }: CartSummaryProps) {
  return (
    <div className="border-[3px] border-[#e9e9e9] p-[25px]">
      <h2 className="uppercase text-[22px] mb-[20px] font-semibold">
        Cart details
      </h2>
      <DetailItem fieldName="Summary" value={`${totalPrice} $`} />
      <DetailItem fieldName="Delivery" value="New Post" />
      <div className="px-[10px] py-[15px] flex items-center justify-between font-semibold mb-[15px]">
        <span className="font-medium text-[18px]">Total</span>
        <span className="text-[23px] text-[#89C647]">{totalPrice} $</span>
      </div>
      <button className="bg-[#89C647] text-[#333333] py-[12px] px-[20px] uppercase text-[13px] font-semibold w-full">
        Go to order
      </button>
    </div>
  );
}

export default CartSummary;
