import ProductCard from "@/components/ProductCard";
import { ProductI } from "@/types/types";
import React from "react";

const products: ProductI[] = [
  {
    id: 1,
    name: "Fish",
    price: 150,
    shortDescription: "Des",
    description: "Descrp",
    categoryId: 1,
    code: "AFS56GJ",
    image:
      "https://upstreambaits.com/wp-content/uploads/2020/04/darts_133-1.jpg",
    characteristics: [
      { key: "Size", value: "18mm" },
      { key: "Color", value: "red" },
    ],
  },
  {
    id: 2,
    name: "Fish",
    price: 150,
    shortDescription: "Des",
    description: "Descrp",
    categoryId: 1,
    code: "AFS56GJ",
    image:
      "https://upstreambaits.com/wp-content/uploads/2020/04/darts_133-1.jpg",
    characteristics: [],
  },
  {
    id: 3,
    name: "Fish",
    price: 150,
    shortDescription: "Des",
    description: "Descrp",
    categoryId: 1,
    code: "AFS56GJ",
    image:
      "https://upstreambaits.com/wp-content/uploads/2020/04/darts_133-1.jpg",
    characteristics: [],
  },
  {
    id: 4,
    name: "Fish",
    price: 150,
    shortDescription: "Des",
    description: "Descrp",
    categoryId: 1,
    code: "AFS56GJ",
    image:
      "https://upstreambaits.com/wp-content/uploads/2020/04/darts_133-1.jpg",
    characteristics: [],
  },
];

function Products() {
  return (
    <div className="grid grid-cols-3 border-t border-l border-gray-200">
      {products.map((product) => (
        <ProductCard key={product.id} />
      ))}
    </div>
  );
}

export default Products;
