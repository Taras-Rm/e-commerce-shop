import { URLS } from "@/constants/pages";
import Link from "next/link";
import React from "react";
import { BsCartX } from "react-icons/bs";
import Item from "./components/Item";
import { FaHryvnia } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

interface CartAsideProps {
  isShowed: boolean;
  close: () => void;
}

function CartAside({ isShowed, close }: CartAsideProps) {
  const { cartProducts, removeProduct, getTotalCost } = useCart();

  const totalCost = getTotalCost();

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
        isShowed ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={close} />

      <div
        className={`flex flex-col absolute top-0 right-0 w-[340px] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isShowed ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="py-[20px] px-[15px] flex justify-between items-center uppercase border-[1px] border-gray-200">
            <h3 className="text-[20px] font-bold">Cart</h3>
            <span className="text-[13px] cursor-pointer" onClick={close}>
              Close
            </span>
          </div>
          {cartProducts.length <= 0 ? (
            <div className="flex flex-col items-center text-[12px]">
              <BsCartX
                size={100}
                color="gray"
                className="mb-[20px] mt-[30px]"
              />
              <span className="uppercase">No items in cart</span>
              <Link
                href={URLS.shop}
                className="bg-[#89C647] py-[10px] px-[14px] uppercase mt-[20px] hover:bg-[#5f843a]"
                onClick={close}
              >
                Back to shop
              </Link>
            </div>
          ) : (
            <>
              <div className="overflow-y-auto h-full">
                {cartProducts.map((item) => (
                  <Item
                    item={item}
                    key={item.name}
                    removeProduct={removeProduct}
                  />
                ))}
              </div>
              <div className="p-[15px] border-[2px] border-gray-200">
                <div className="flex justify-between items-center mb-[15px]">
                  <span className="text-[18px] uppercase font-bold">
                    Total:
                  </span>
                  <div className="text-[20px] text-[#89C647] flex items-center">
                    <span>{totalCost}</span>
                    <FaHryvnia />
                  </div>
                </div>
                <Link
                  href={URLS.cart}
                  className="block text-center bg-[#89C647] text-[#333333] py-[12px] px-[20px] uppercase text-[13px] font-semibold mb-[10px] w-full"
                >
                  Check cart
                </Link>

                <button className="bg-[#89C647] text-[#333333] py-[12px] px-[20px] uppercase text-[13px] font-semibold w-full">
                  Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartAside;
