'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';

interface ProductType {
  id: number;
  title: string;
  thumbnail: string;
  price: number; 
}

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔥 Debounce State
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce Effect (300ms delay)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  // Fetch & Filter from API
  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearch}`
        );
        const data = await res.json();
        setFilteredProducts(data?.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearch]);

  return (
    <div className="hidden md:inline-flex flex-1 relative h-10">
      <input
        type="text"
        placeholder="Search Products here"
        className="w-full h-full border-2 border-[#115061] px-4 outline-none rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}

      <span>
        <RiSearchLine className="w-10 h-10 inline-flex bg-[#115061] text-white items-center justify-center p-2 absolute top-0 right-0 cursor-pointer duration-200 rounded-r-md" />
      </span>

      {/* Dropdown */}
      {search && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg border rounded-md max-h-80 overflow-y-auto z-50">
          
          {/* Loading */}
          {loading && (
            <div className="px-4 py-3 text-sm text-gray-500">
              Searching...
            </div>
          )}

          {/* Results */}
          {!loading && filteredProducts.length > 0 && (
            filteredProducts.slice(0, 10).map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                onClick={() => setSearch("")}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition justify-between"
              >
                {/* Left Image */}
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Middle Title */}
                <span className="flex-1 text-sm font-medium line-clamp-1 text-black">
                  {item.title}
                </span>

                {/* Right Price */}
                <span className="text-sm font-semibold text-[#115061]">
                  ${item.price}
                </span>
              </Link>
            ))
          )}

          {/* No Result */}
          {!loading && debouncedSearch && filteredProducts.length === 0 && (
            <div className="px-4 py-3 text-sm text-gray-500">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;