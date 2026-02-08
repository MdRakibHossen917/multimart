import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '../../type';

const ProductCard = ({ product }: { product: ProductType }) => {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300  hover:shadow-xl hover:shadow-black/20">
      
      {/* Discount badge */}
      {product.discountPercentage > 0 && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          -{product.discountPercentage.toFixed(0)}%
        </span>
      )}

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-40 md:h-64 w-full overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="mt-2 md:mt-3 space-y-1">
        <p className="text-xs uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>

          {product.discountPercentage > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ${product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
