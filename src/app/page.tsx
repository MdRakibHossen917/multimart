
import Container from "@/components/container/Container";
import Banner from "@/components/header/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "@/helpers";

 

export default async function Home() {
   const endpoint = 'https://dummyjson.com/products';
   const data = await getData (endpoint);
  const products = data?.products ?? [];
  // console.log(products)

  return (
    <main>
      <Banner />

      <ProductList products={products} key={products.length} />
      
      {/* test */}
      {/* <Container className="">
        <h2 className="text-xl font-bold">Products</h2>
        <p>Total: {products.length}</p>
      </Container> */}
    </main>
  );
}
