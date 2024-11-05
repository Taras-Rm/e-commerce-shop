import { getProducts } from "@/api/product";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { ProductI } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface ProductsProps {
  categoryId?: number;
}

function Products({ categoryId }: ProductsProps) {
  const { data: products, isLoading } = useQuery<ProductI[]>({
    queryKey: ["products", "category", categoryId],
    queryFn: () => getProducts(categoryId),
  });

  const { changeProductCount } = useCart();

  if (isLoading) {
    return (
      <div className="h-full flex justify-center pt-[50px]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 border-t border-l border-gray-200">
      {products?.map((product) => (
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          key={product.id}
          quantity={product.quantity}
          isNew={product.isNew}
          addToCart={() => changeProductCount({ ...product }, 1, "add")}
        />
      ))}
    </div>
  );
}

export default Products;
