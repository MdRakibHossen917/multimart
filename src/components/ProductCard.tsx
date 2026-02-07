import Image from 'next/image';
import { ProductType } from '../../type';

const ProductCard = ({ product } : { product: ProductType }) => {
  return (
    <div className="border p-3 rounded">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
        className="rounded"
      />

      <h3 className="mt-2 text-sm font-medium">
        {product.title}
      </h3>
    </div>
  );
};

export default ProductCard;
