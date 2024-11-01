import { getCategorySubCategories } from "@/api/category";
import Loader from "@/components/Loader";
import SubCategoryCard from "@/components/SubCategoryCard";
import { useCategorySelection } from "@/context/CategorySelectionContext";
import { CategoryI } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface SubCategoriesProps {
  categoryId: number;
}

function SubCategories({ categoryId }: SubCategoriesProps) {
  const { setCategory } = useCategorySelection();

  const { data: subCategories, isLoading } = useQuery<CategoryI[]>({
    queryKey: ["categories", categoryId, "subCategories"],
    queryFn: () => getCategorySubCategories(categoryId),
  });

  if (isLoading) {
    return (
      <div className="h-full flex justify-center pt-[50px]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 border-t border-l border-gray-200">
      {subCategories?.map((subCategory) => (
        <SubCategoryCard
          key={subCategory.id}
          name={subCategory.name}
          onClick={() => setCategory(subCategory)}
        />
      ))}
    </div>
  );
}

export default SubCategories;
