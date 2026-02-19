import React from "react";
import { ProductType } from "../../../type";
import Link from "next/link";
import Image from "next/image";
import PriceFormat from "../PriceFormat";
import AddToCartButton from "../AddToCartButton";
import { IoClose } from "react-icons/io5";
import { removeFromCart } from "@/redux/multimartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";

const CartProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    if (!product?.id) return;
    dispatch(removeFromCart(product.id));
    toast.success(`${product.title.substring(0, 20)} removed from cart!`);
  };

  return (
    <div className="flex py-2 sm:py-4 relative">
      {/* Product Image */}
      <Link
        href={{
          pathname: `products/${product?.id}`,
          query: { id: product?.id },
        }}
      >
        <div className="relative h-24 sm:h-48 sm:w-48 overflow-hidden rounded-lg bg-gray-50 group">
          <Image
            src={product?.images[0]}
            alt="product-image"
            width={300}
            height={300}
            priority
            sizes="(max-width: 768px) 100vw, 25vw"
            className="h-full w-full p-2 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:pr-0">
          <div className="flex flex-col gap-1 col-span-5">
            <h3 className="text-base font-semibold line-clamp-2">
              {product?.title}
            </h3>
            <p className="text-xs">
              Brand: <span className="font-medium">{product?.brand}</span>
            </p>
            <p className="text-xs">
              Category: <span className="font-medium">{product?.category}</span>
            </p>
          </div>

          <div className="flex items-center gap-6 mt-2">
            <PriceFormat
              amount={product?.price * product.quantity!}
              className="text-base font-bold"
            />
            <AddToCartButton product={product} />
          </div>
        </div>
        <div>
          {product?.availabilityStatus && (
            <p className="flex space-x-2 text-sm text-gray-700">
              <FaCheck className="text-lg text-green-500" />
              <span>In Stock</span>
            </p>
          )}
          <p>You are saving <PriceFormat amount =
          {
            product?.price * (product?.discountPercentage / 100) * product.quantity!
          } /></p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemoveProduct}
        className="absolute top-2 right-2 p-2 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-red-800 rounded"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default CartProduct;
