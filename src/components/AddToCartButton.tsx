"use client";

import { ProductType, StateType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/multimartSlice";
import { toast } from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface AddToCartButtonProps {
  product: ProductType;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { cart } = useSelector((state: StateType) => state.multimart);
  const dispatch = useDispatch();

  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null,
  );

  //check product in cart
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    setExistingProduct(availableProduct || null);
  }, [cart, product]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.title.substring(0, 10)}... added to cart!`);
  };

  return (
    <>
      {existingProduct ? (
        //Quantity Controller
        <div className="flex items-center gap-2 py-2 mb-2">
          <button
            onClick={() => {
              dispatch(decreaseQuantity(product.id));
              toast.success("Quantity decreased");
            }}
            disabled={existingProduct.quantity! <= 1}
            className="px-2 py-2 bg-[#f7f7f7] text-[#000000] border border-gray-200 hover:border-[#115061] rounded-full text-sm hover:bg-white duration-200 disabled:text-gray-300 disabled:hover:bg-[#f7f7f7] disabled:border-gray-200 disabled:cursor-not-allowed"
          >
            <FaMinus />
          </button>

          <p className="text-base font-semibold w-10 text-center">
            {existingProduct.quantity}
          </p>

          <button
            onClick={() => {
              dispatch(increaseQuantity(product.id));
              toast.success("Quantity increased");
            }}
            className="px-2 py-2 bg-[#f7f7f7] text-[#000000] border border-gray-200 hover:border-[#115061] rounded-full text-sm hover:bg-white duration-200"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        //Add To Cart Button
        <button
          onClick={handleAddToCart}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 hover:border-[#115061]  bg-transparent px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-black hover:text-white"
        >
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
