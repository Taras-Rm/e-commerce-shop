"use client";

import AmountControl from "@/components/AmountControl";
import Image from "next/image";
import React from "react";
import NoImage from "@/assets/no-image.png";

interface CartProductItemProps {
  imageUrl?: string;
  name: string;
  price: number;
  amount: number;
}

function CartProductItem({
  imageUrl,
  name,
  price,
  amount,
}: CartProductItemProps) {
  return (
    <div className="py-[20px] border-b border-[#e9e9e9] text-[14px] grid grid-cols-12 text-center">
      <div className="col-span-6 flex items-center justify-start px-[10px]">
        <div className="relative w-[80px] h-[80px]">
          <Image
            src={imageUrl ? imageUrl : NoImage}
            fill
            className="object-contain"
            alt="cart item"
          />
        </div>

        <span className="pl-[24px]">{name}</span>
      </div>
      <div className="col-span-1 flex items-center justify-center px-[10px]">
        {price}
      </div>
      <div className="col-span-2 flex items-center justify-center px-[10px]">
        <AmountControl
          initialQuantity={amount}
          maxCount={10}
          onChange={() => {}}
        />
      </div>
      <div className="col-span-3 text-[#89C647] text-right font-semibold text-[15px] flex items-center justify-center px-[10px]">
        {amount * price}
      </div>
    </div>
  );
}

export default CartProductItem;
