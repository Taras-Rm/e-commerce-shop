"use client";

import React from "react";
import Products from "./components/Products";
import { useCategorySelection } from "@/context/CategorySelectionContext";
import SubCategories from "./components/SubCategories";

function ShopPage() {
  const { category } = useCategorySelection();

  if (category?.hasSubCategories) {
    return <SubCategories categoryId={category.id} />;
  }

  return <Products categoryId={category?.id} />;
}

export default ShopPage;
