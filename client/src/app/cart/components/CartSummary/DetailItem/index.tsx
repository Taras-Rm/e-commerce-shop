import React from "react";

interface DetailItemProps {
  fieldName: string;
  value: string;
}

function DetailItem({ fieldName, value }: DetailItemProps) {
  return (
    <div className="border-b border-[#e9e9e9] px-[10px] py-[15px] flex items-center justify-between">
      <span className="font-medium">{fieldName}</span>
      <span className="text-[#767676]">{value}</span>
    </div>
  );
}

export default DetailItem;
