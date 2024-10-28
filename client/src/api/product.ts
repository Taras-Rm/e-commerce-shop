import { api } from "./api";
import { ProductI } from "@/types/types";

export const getProductById = async (id: number): Promise<ProductI> => {
  const response = await api.get<ProductI>(`/products/${id}`);

  return response.data;
};
