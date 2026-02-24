import Container from "@/components/container/Container";
import Title from "@/components/Title";
import { getData } from "@/helpers";
import { ProductType } from "../../../type";
import CategoriesClient from "@/app/Categories/CategoriesClient";

type CategoryItem = string | { slug?: string; name?: string; url?: string };
export interface CategoryOption {
  value: string;
  label: string;
}

const CategoriesPage = async () => {
  const categoriesEndpoint = "https://dummyjson.com/products/categories";
  const productsEndpoint = "https://dummyjson.com/products";
  const categoriesData: CategoryItem[] | null = await getData(categoriesEndpoint);
  const productsData = await getData(productsEndpoint);
  const products: ProductType[] = productsData?.products ?? [];

  const categories: CategoryOption[] = (categoriesData ?? [])
    .map((item) => {
      if (typeof item === "string") {
        return {
          value: item,
          label: item,
        };
      }

      const value = item?.slug || item?.name || "";
      const label = item?.name || item?.slug || "";

      return {
        value,
        label,
      };
    })
    .filter((item) => item.value.length > 0);

  return (
    <Container className="py-6 md:py-10">
      <Title className="mb-4 md:mb-6">Categories</Title>
      <CategoriesClient categories={categories} products={products} />
    </Container>
  );
};

export default CategoriesPage;
