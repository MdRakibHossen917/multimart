import { ProductType } from '../../type';
import PriceFormat from './PriceFormat';

const ProductPrice = ({ product }: { product: ProductType }) => {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  const hasDiscount = product.discountPercentage > 0;

  return (
    <div className="flex items-center gap-2">
      <PriceFormat
        amount={hasDiscount ? discountedPrice : product.price}
        className="text-lg font-bold text-gray-900"
      />

      {hasDiscount && (
        <PriceFormat
          amount={product.price}
          className="text-sm text-gray-400 line-through"
        />
      )}
    </div>
  );
};

export default ProductPrice;
