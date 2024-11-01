import { api } from "./api";
import { CategoryI } from "@/types/types";

export const getAllCategories = async (): Promise<CategoryI[]> => {
  const response = await api.get<CategoryI[]>("/categories");

  return response.data;
};

export const getCategorySubCategories = async (
  id: number
): Promise<CategoryI[]> => {
  const response = await api.get<CategoryI[]>(
    `/categories/${id}/subcategories`
  );

  return response.data;
};
