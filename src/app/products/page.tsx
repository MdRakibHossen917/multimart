import Container from "@/components/container/Container";
import ProductList from "@/components/ProductList";
import Title from "@/components/Title";
import { getData } from "@/helpers";

const ProductsPage = async () => {
  const endpoint = "https://dummyjson.com/products";
  const data = await getData(endpoint);
  const products = data?.products ?? [];

  return (
    <Container className="py-6 md:py-10">
      <Title className="mb-4 md:mb-6">All Products</Title>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </Container>
  );
};

export default ProductsPage;
