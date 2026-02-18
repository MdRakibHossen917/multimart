'use client'
import { useDispatch, useSelector } from 'react-redux';
import { ProductType, StateType } from '../../type';
import PriceFormat from './PriceFormat';
import { useEffect, useState } from 'react';

const ProductPrice = ({ product }: { product: ProductType }) => {


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
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  const hasDiscount = product.discountPercentage > 0;

  return (
    <div className="flex items-center gap-2">
      <PriceFormat
        amount={existingProduct ? discountedPrice * existingProduct.quantity! : discountedPrice}
        className="text-lg font-bold text-gray-900"
      />

      {hasDiscount && (
        <PriceFormat
          amount={existingProduct ? product.price * existingProduct.quantity! : product.price}
          className="text-sm text-gray-400 line-through"
        />
      )}
    </div>
  );
};

export default ProductPrice;
