import Link from "next/link";
import React from "react";

type BreadcrumbItem = {
  name: string;
  isActive: boolean;
  href: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex space-x-2 text-[#767676] text-[14px]">
      {items.map((item, idx) => (
        <>
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
          {idx < items.length - 1 && <span>/</span>}
        </>
      ))}
    </div>
  );
}

export default Breadcrumb;
