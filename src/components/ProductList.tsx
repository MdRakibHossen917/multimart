 

'use client';


import { ProductType } from '../../type';
import Container from './container/Container';
import ProductCard from './ProductCard';

interface ProductListProps {
    products: ProductType[];
}

const ProductList = ({ products}: ProductListProps) => {
     // console.log(products)
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
        {products?.map((item:ProductType) => (
         <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
