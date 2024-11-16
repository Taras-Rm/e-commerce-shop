"use client";

import { URLS } from "@/constants/pages";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import NoImage from "@/assets/no-image.png";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  id: number;
  quantity: number;
  isNew: boolean;
  addToCart: () => void;
  imageUrl?: string;
}

function ProductCard({
  name,
  price,
  id,
  quantity,
  isNew,
  addToCart,
  imageUrl,
}: ProductCardProps) {
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);

  const handleAddToCartClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    addToCart();
  };

  const isSold = quantity === 0;

  return (
    <div
      className="border-b border-r border-gray-200 p-[15px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className="relative mb-[10px] overflow-hidden cursor-pointer"
        onClick={() => router.push(URLS.shop + "/" + id)}
      >
        <Image
          src={imageUrl ? imageUrl : NoImage}
          height={240}
          width={240}
          className="mb-[10px]"
          alt="product image"
        />
        {/* labels */}
        <div className="absolute top-0 left-0 font-semibold space-y-[10px]">
          {isSold && (
            <div className="bg-[#ffffff] text-[#2D2A2A] py-[5px] px-[10px] uppercase text-[12px] opacity-85">
              Sold
            </div>
          )}
          {isNew && (
            <div className="bg-[#438E44] text-[#ffffff] py-[5px] px-[10px] uppercase text-[12px]">
              New
            </div>
          )}
        </div>
        {/* actions */}
        <div
          className={`absolute top-0 right-0 shadow-[2px_2px_4px_rgba(0,0,0,0.2)] transition-all duration-300 ${
            isHover
              ? "translate-x-0 opacity-100"
              : "translate-x-[10px] opacity-0"
          }`}
        >
          <div className="w-[50px] h-[45px] flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#89C647]">
            <IoIosSearch size={30} />
          </div>
        </div>
        {/* button */}
        {!isSold && (
          <button
            onClick={handleAddToCartClick}
            className={`absolute bottom-0 uppercase text-[14px] text-[#ffffff] bg-[#89C647] w-full p-[10px] font-semibold transition-all duration-300 ${
              isHover ? "translate-y-0" : "translate-y-full"
            }`}
          >
            Add to cart
          </button>
        )}
      </div>
      <div className="flex flex-col items-center text-[14px]">
        <a className="mb-[5px] text-[#333333]" href="/">
          {name}
        </a>
        <span className="text-[#89C647] font-semibold">{price} grn</span>
      </div>
    </div>
  );
}

export default ProductCard;
