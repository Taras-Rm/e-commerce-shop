import React from "react";

interface CharacteristicProps {
  keyValue: string;
  value: string;
}

function Characteristic({ keyValue, value }: CharacteristicProps) {
  return (
    <div className="p-[5px] flex justify-between items-center border-t border-dashed border-gray-200 first:border-none">
      <span className="text-[2D2A2A] font-semibold">{keyValue}</span>
      <span className="text-[#89c647]">{value}</span>
    </div>
  );
}

export default Characteristic;
