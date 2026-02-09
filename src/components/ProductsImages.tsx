"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductsImagesProps {
  images: string[];
}

const ProductsImages = ({ images }: ProductsImagesProps) => {
  const [currentImage, setCurrentImage] = useState(images?.[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

      {/* Main Image */}
      <div className="order-1 md:order-2 md:col-span-4 relative w-full h-[450px] max-h-[500px]  rounded-xl shadow-xl overflow-hidden bg-gray-50">
        {currentImage && (
          <Image
            src={currentImage}
            alt="Product image"
            fill
            priority
            className="object-contain"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="order-2 md:order-1 flex flex-row md:flex-col gap-3 overflow-x-auto   md:overflow-visible">
        {images?.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(item)}
            className={`relative w-20 h-20 shrink-0 border rounded-sm overflow-hidden opacity-80  hover:opacity-100 duration-200 
              ${currentImage === item ? "border-gray-400 opacity-100" : "border-gray-100"}
            `}
          >
            <Image
              src={item}
              alt="Product image"
              fill
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default ProductsImages;
