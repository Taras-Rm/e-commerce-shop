import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AmountControlProps {
  initialQuantity: number;
  maxCount: number;
  onChange: (quantity: number) => void;
}

function AmountControl({
  initialQuantity,
  maxCount,
  onChange,
}: AmountControlProps) {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleDecrementClick = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  const handleIncrementClick = () => {
    if (quantity < maxCount) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  return (
    <div className="flex h-[42px]">
      <button
        onClick={handleDecrementClick}
        className="border border-gray-200 px-[7px] transition-colors duration-300 ease-in-out hover:bg-[#89c647] hover:text-[#ffffff] hover:border-[#89c647]"
      >
        <FaMinus size={7} />
      </button>
      <div className="border-y border-gray-200 w-[35px] px-[10px] flex items-center justify-center text-[14px]">
        {quantity}
      </div>
      <button
        onClick={handleIncrementClick}
        className="border border-gray-200 px-[7px] transition-colors duration-300 ease-in-out hover:bg-[#89c647] hover:text-[#ffffff] hover:border-[#89c647]"
      >
        <FaPlus size={7} />
      </button>
    </div>
  );
}

export default AmountControl;
