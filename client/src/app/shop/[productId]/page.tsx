"use client";

import React, { useState } from "react";
import Characteristic from "./components/Characteristic";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { ProductI } from "@/types/types";
import { useParams } from "next/navigation";
import { getProductById } from "@/api/product";
import Loader from "@/components/Loader";
import { IoMdClose } from "react-icons/io";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import NoImage from "@/assets/no-image.png";

function ProductPage() {
  const params = useParams<{ productId: string }>();

  const { changeProductCount } = useCart();

  const [count, setCount] = useState<number>(1);

  const { data: product, isLoading } = useQuery<ProductI>({
    queryKey: ["product", params.productId],
    queryFn: () => getProductById(Number(params.productId)),
  });

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    changeProductCount(
      {
        id: product?.id,
        name: product?.name,
        imageUrl: product?.imageUrl,
        price: product?.price,
      },
      count,
      "add"
    );
  };

  const isSold = product?.quantity === 0;

  if (isLoading) {
    return (
      <div className="h-full flex justify-center pt-[50px]">
        <Loader />
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 border-l border-gray-200 px-[15px]">
      <div className="max-h-[413px] max-w-[383px] px-[15px]">
        <Image
          src={product.imageUrl ? product.imageUrl : NoImage}
          height={240}
          width={240}
          className="mb-[10px]"
          alt="product image"
        />
        {/* <img src="https://upstreambaits.com/wp-content/uploads/2020/04/darts_133-1.jpg" /> */}
      </div>
      <div className="pb-[30px]">
        <h1 className="text-[34px] text-[#2D2A2A] font-semibold leading-[1.2] mb-[20px]">
          {product.name}
        </h1>
        <div className="text-[22px] text-[#89c647] font-semibold mb-[20px] space-x-[8px]">
          <span>{product.price}</span>
          <span>{product.currency}</span>
        </div>
        <p className="text-[#777777] text-[14px] mb-[20px]">
          {product.shortDescription}
        </p>
        {product.characteristics.length > 0 && (
          <div className="flex flex-col text-[14px] mb-[20px]">
            {product.characteristics.map((ch) => (
              <Characteristic key={ch.id} keyValue={ch.key} value={ch.value} />
            ))}
          </div>
        )}

        {isSold ? (
          <div className="flex items-center space-x-[5px] mb-[20px]">
            <IoMdClose color="red" />
            <span className="text-[14px] text-[#333333] font-semibold">
              Not available
            </span>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-[5px] mb-[20px]">
              <FaCheck color="#89c647" />
              <span className="text-[14px] text-[#333333] font-semibold">
                Present
              </span>
            </div>
            <div className="h-[40px] flex space-x-[15px] mb-[20px]">
              <div className="flex h-full">
                <button
                  onClick={() => count > 1 && setCount((val) => val - 1)}
                  className="border border-gray-200 px-[7px] transition-colors duration-300 ease-in-out hover:bg-[#89c647] hover:text-[#ffffff] hover:border-[#89c647]"
                >
                  <FaMinus size={7} />
                </button>
                <div className="border-y border-gray-200 w-[35px] px-[10px] flex items-center justify-center text-[14px]">
                  {count}
                </div>
                <button
                  onClick={() =>
                    count < product.quantity && setCount((val) => val + 1)
                  }
                  className="border border-gray-200 px-[7px] transition-colors duration-300 ease-in-out hover:bg-[#89c647] hover:text-[#ffffff] hover:border-[#89c647]"
                >
                  <FaPlus size={7} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-[#89c647] px-[20px] uppercase text-[13px] font-semibold"
              >
                Add to cart
              </button>
            </div>
          </>
        )}
        <div className="border-t border-gray-200 pt-[20px] text-[14px] space-y-[12px]">
          <div className="flex space-x-[5px]">
            <span className="font-semibold">Code:</span>
            <span className="text-[#777777]">{product.code}</span>
          </div>
          <div className="flex space-x-[5px]">
            <span className="font-semibold">Category:</span>
            <span className="text-[#777777]">Fish</span>
          </div>
        </div>
      </div>
      <div className="col-span-2 py-[30px] border-t border-gray-200">
        <h3 className="text-[16px] uppercase font-semibold mb-[40px]">
          Description
        </h3>
        <p className="text-[14px] text-[#777777]">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
