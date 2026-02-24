"use client";

import Container from "@/components/container/Container";
import PriceFormat from "@/components/PriceFormat";
import { addToCart, addToFavorite } from "@/redux/multimartSlice";
import { ProductType, StateType } from "../../../type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const FavoritePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const favorite = useSelector((state: StateType) => state.multimart.favorite);

  const handleAddToCartFromFavorite = (product: ProductType) => {
    dispatch(addToCart(product));
    dispatch(addToFavorite(product));
    toast.success(`${product.title.substring(0, 15)} added to cart`);
    router.push("/cart");
  };

  const handleRemoveFavorite = (product: ProductType) => {
    dispatch(addToFavorite(product));
    toast.success(`${product.title.substring(0, 15)} removed from favorite`);
  };

  return (
    <Container className="py-8 md:py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Favorite Items
      </h1>

      {!favorite?.length ? (
        <p className="text-gray-500">No favorite items found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorite.map((item: ProductType) => (
            <div
              key={item.id}
              className="relative text-left rounded-xl border border-gray-200 bg-white p-3 transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  handleRemoveFavorite(item);
                }}
                aria-label="Remove from favorite"
                className="absolute right-2 top-2 z-10 rounded-full border border-gray-200 bg-white p-1 text-gray-600 hover:text-black"
              >
                <RxCross2 className="text-sm" />
              </button>

              <div className="relative h-36 md:h-48 w-full overflow-hidden rounded-lg bg-gray-50 mb-3">
                <Image
                  src={item.images?.[0] || item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain"
                />
              </div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                {item.category}
              </p>
              <h2 className="line-clamp-2 text-sm font-semibold text-gray-800 mb-1">
                {item.title}
              </h2>
              <PriceFormat amount={item.price} className="text-sm text-[#115061]" />

              <button
                onClick={() => handleAddToCartFromFavorite(item)}
                className="mt-3 flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:border-[#115061] hover:bg-black hover:text-white"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default FavoritePage;
