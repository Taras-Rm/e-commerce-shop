"use client";

import { getAllCategories } from "@/api/category";
import Category from "@/components/Category";
import Loader from "@/components/Loader";
import { useCategorySelection } from "@/context/CategorySelectionContext";
import { CategoryI } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Categories() {
  const { setCategory } = useCategorySelection();

  const { data: categories, isLoading } = useQuery<CategoryI[]>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const onCategoryClick = (category: CategoryI) => {
    setCategory(category);
  };

  return (
    <div>
      <h5 className="text-[16px] uppercase font-bold mb-[15px]">
        Goods categories
      </h5>

      {isLoading ? (
        <div className="flex w-full justify-center pt-[20px]">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col">
          {categories?.map((c) => (
            <Category category={c} key={c.id} onClick={onCategoryClick} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
