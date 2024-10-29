"use client";

import React from "react";
import Products from "./components/Products";
import { useCategorySelection } from "@/context/CategorySelectionContext";

function ShopPage() {
  const { category } = useCategorySelection();

  if (category?.hasSubCategories) {
    return <div>Sub categories</div>;
  }

  return <Products categoryId={category?.id} />;
}

export default ShopPage;
