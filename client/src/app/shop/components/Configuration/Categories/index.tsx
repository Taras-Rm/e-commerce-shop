"use client";

import { getAllCategories } from "@/api/category";
import Category from "@/components/Category";
import { CategoryI } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Categories() {
  const { data: categories } = useQuery<CategoryI[]>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return (
    <div>
      <h5 className="text-[16px] uppercase font-bold mb-[15px]">
        Goods categories
      </h5>
      <div className="flex flex-col">
        {categories?.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
