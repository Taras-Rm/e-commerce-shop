import React from "react";

interface SubCategoryCardProps {
  onClick: () => void;
  name: string;
}

function SubCategoryCard({ name, onClick }: SubCategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="border-b border-r border-gray-200 p-[15px] flex items-center justify-center cursor-pointer"
    >
      {name}
    </div>
  );
}

export default SubCategoryCard;
