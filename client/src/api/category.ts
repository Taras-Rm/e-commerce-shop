import { api } from "./api";
import { CategoryI } from "@/types/types";

export const getAllCategories = async (): Promise<CategoryI[]> => {
  const response = await api.get<CategoryI[]>("/categories");

  return response.data;
};
