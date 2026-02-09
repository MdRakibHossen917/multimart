import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../../type";
import Sidebar from "./Sidebar";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-2 transition-all duration-300  hover:shadow-xl hover:shadow-black/20">
      <Link
        href={{
          pathname: `products/${product?.id}`,
          query: { id: product?.id },
        }}
      >
        <div className="relative h-40 md:h-64 w-full overflow-hidden rounded-lg bg-gray-50">
          {/* Image */}
          <Image
            src={product?.images[0]}
            alt={"product-image"}
            width={500}
            height={500}
            priority={true}
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Sidebar */}

      <Sidebar />

      {/* Content */}
      <div className="mt-2 md:mt-3 space-y-1">
        <p className="text-xs uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
          {product.title}
        </h3>

        {/* Price */}
        <ProductPrice product={product} />
      </div>
      <div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
