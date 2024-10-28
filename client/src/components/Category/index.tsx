"use client";

import { CategoryI } from "@/types/types";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface CategoryProps {
  category: CategoryI;
}

function Category({ category }: CategoryProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="text-[14px] text-[#727272] flex justify-between relative pr-[25px] cursor-pointer mt-[10px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className={`${isHovered ? "text-[#000000]" : ""}`}>
          {category.name}
        </span>
        <div className="flex items-center">
          <div
            className={`flex justify-center items-center border-[1px] border-gray-200 rounded-2xl w-[32px] text-[12px] transition-colors duration-200 ease-in-out ${
              isHovered ? "bg-[#89C647] border-[#89C647] text-[#ffffff]" : ""
            }`}
          >
            {category.productsCount}
          </div>
          {category.subCategories.length > 0 && (
            <div className="flex justify-center items-center h-full aspect-square absolute right-0 ml-[5px] rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-200 cursor-pointer">
              <IoIosArrowDown />
            </div>
          )}
        </div>
      </div>
      {
        <div
          className={`pl-[10px] flex flex-col transition-max-height duration-700 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {category.subCategories.map((subcategory) => (
            <Category category={subcategory} key={subcategory.id} />
          ))}
        </div>
      }
    </>
  );
}

export default Category;
