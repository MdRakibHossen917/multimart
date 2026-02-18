"use client";

import { FiShoppingCart } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../../type";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/multimartSlice";  
import { toast } from "react-hot-toast";

interface AddToCartButtonProps {
  product: ProductType;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(product)
    if(product){
      dispatch(addToCart(product))
       toast.success(`${product?.title.substring(0,10)}....added to cart!`);
       
    }
    
  };

  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-black bg-transparent px-4 py-2 text-sm font-medium text-black transition-all duration-200",
        "hover:bg-black hover:text-white",
        "disabled:cursor-not-allowed disabled:opacity-60"
      )}
    >
      <FiShoppingCart className="text-base" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
