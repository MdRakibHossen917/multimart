"use client";

import ProductCard from "@/components/ProductCard";
import { ProductType } from "../../../type";
import { useMemo, useState } from "react";
import { CategoryOption } from "./page";

interface CategoriesClientProps {
  categories: CategoryOption[];
  products: ProductType[];
}

const normalizeCategory = (value: string) =>
  value.toLowerCase().trim().replace(/[\s_]+/g, "-");

const CategoriesClient = ({ categories, products }: CategoriesClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]?.value || ""
  );
  const [isCategoryChanging, setIsCategoryChanging] = useState(false);

  const handleCategoryChange = (categoryValue: string) => {
    if (categoryValue === selectedCategory) {
      return;
    }

    setIsCategoryChanging(true);
    setSelectedCategory(categoryValue);

    setTimeout(() => {
      setIsCategoryChanging(false);
    }, 250);
  };

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    const selected = normalizeCategory(selectedCategory);

    return products.filter(
      (product) => normalizeCategory(product.category) === selected
    );
  }, [products, selectedCategory]);

  if (!categories.length) {
    return <p className="text-gray-500">No categories found.</p>;
  }

  return (
    <div className="grid grid-cols-[120px_1fr] md:grid-cols-4 gap-3 md:gap-5">
      <div className="col-span-1 max-h-90 overflow-y-auto pr-1 space-y-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategoryChange(category.value)}
            className={`w-full rounded-lg border px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.value
                ? "border-[#115061] bg-[#115061] text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#115061]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="col-span-1 md:col-span-3">
        {isCategoryChanging ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-3 animate-pulse"
              >
                <div className="h-36 md:h-48 w-full rounded-lg bg-gray-200 mb-3" />
                <div className="h-3 w-2/5 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-4/5 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-1/3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesClient;
