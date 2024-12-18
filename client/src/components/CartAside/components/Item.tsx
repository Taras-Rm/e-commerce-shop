import { CartItem as CartItemType } from "@/types/types";
import React from "react";
import { FaHryvnia } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import NoImage from "@/assets/no-image.png";
import Image from "next/image";

interface ItemProps {
  item: CartItemType;
  removeProduct: (id: number) => void;
}

function Item({ item, removeProduct }: ItemProps) {
  return (
    <div className="p-[15px] flex justify-between cursor-pointer border-[1px] border-gray-200 first:border-none transition-colors duration-300 ease-in-out hover:bg-gray-100">
      <div className="flex">
        <Image
          src={item.imageUrl ? item.imageUrl : NoImage}
          height={65}
          width={65}
          className="mb-[10px]"
          alt="cart item"
        />
        <div className="ml-[15px] text-[13px] flex flex-col">
          <span className="mb-[6px] text-[14px]">{item.name}</span>
          <div className="text-gray-400 flex items-center space-x-1">
            <span>{item.count}</span>
            <IoIosClose size={12} />
            <span className="text-[#89c647] flex items-center">
              {item.price} <FaHryvnia />
            </span>
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => removeProduct(item.id)}
          className="rounded-full transition-colors duration-300 ease-in-out hover:bg-[#ffffff]"
        >
          <IoIosClose size={20} />
        </div>
      </div>
    </div>
  );
}

export default Item;
