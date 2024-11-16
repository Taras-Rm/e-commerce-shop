"use client";

import React from "react";
import SubCategories from "../../components/SubCategories";
import { useParams } from "next/navigation";

function CategoryPage() {
  const params = useParams<{ categoryId: string }>();

  return <SubCategories categoryId={Number(params.categoryId)} />;
}

export default CategoryPage;
