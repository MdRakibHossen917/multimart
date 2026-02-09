import Container from "@/components/container/Container";
import ProductsImages from "@/components/ProductsImages";
import { getData } from "@/helpers";
import { ProductType } from "../../../../type";
import ProductPrice from "@/components/ProductPrice";
import { MdStar } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import PriceFormat from "@/components/PriceFormat";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { bKash, masterCard, nagad, visa } from "@/assets/banner";

interface SingleProductPageProps {
  params: Promise<{ id: string }>;
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const { id } = await params;

  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await getData(endpoint);

  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <ProductsImages images={product?.images} />

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold mb-3">{product.title}</h2>

          {/* Price + Rating */}
          <div className="flex items-center justify-between gap-4">
            <ProductPrice product={product} />

            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => {
                const rating = product.rating;
                let starClass = "text-gray-300";
                if (index + 1 <= Math.floor(rating))
                  starClass = "text-yellow-500";
                else if (index < rating) starClass = "text-yellow-300";

                return <MdStar key={index} className={starClass} />;
              })}

              <span className="text-sm text-gray-500 ml-2">
                ({product?.rating?.toFixed(1)}) reviews
              </span>
            </div>
          </div>

          {/* Viewers */}
          <p className="flex items-center gap-1 mt-2">
            <FaRegEye className="mr-1" />
            <span className="font-semibold">1M</span> people are viewing right
            now
          </p>

          {/* Discount Info */}
          <p className="mt-1">
            You are saving{" "}
            <PriceFormat
              amount={(product?.discountPercentage / 100) * product.price}
            />
          </p>

          {/* Description */}
          <p className="text-gray-600 tracking-wide mt-2">
            {product.description}
          </p>

          {/* Product Info */}
          <div className="mt-4 border border-gray-300 rounded-lg p-4 bg-gray-50 space-y-2">
            <div>
              <span className="font-semibold">Brand:</span> {product.brand}
            </div>
            {product.warrantyInformation && (
              <div className="text-base">{product.warrantyInformation}</div>
            )}

            <div>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </div>

            <div>
              <span className="font-semibold">Tags:</span>{" "}
              {product?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block mr-2 rounded tracking-wide text-sm text-gray-700 uppercase"
                >
                  {tag}
                  {index !== product.tags.length - 1 && ","}
                </span>
              ))}
            </div>

            <div className="text-sm text-green-700 font-semibold">
              Stock: {product.stock}
            </div>
          </div>

          {/* Add to Cart */}
          <AddToCartButton product={product} />

          {/* Payment Logos */}
          <div className="my-3 flex items-center gap-3">
            {[bKash, nagad, visa, masterCard].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt="payment method"
                width={80}
                height={40}
                className="payment-logo payment-logo-hover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Reviews */}
      {/* Product Reviews */}
<div className="my-10 p-10 bg-[#f7f7f7] md:col-span-2">
  <h3 className="text-2xl font-semibold mb-6">Customer Reviews</h3>

  {product.reviews && product.reviews.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {product.reviews.map((review, index) => (
        <div
          key={index}
          className="p-4 bg-white/20 border border-amazoneDark/50 rounded-md hover:border-amazoneDark hover:bg-white duration-200 flex flex-col gap-2"
        >
          {/* Reviewer Info */}
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-gray-800">{review.reviewerName || "Anonymous"}</p>
            <p className="text-xs font-semibold text-gray-500">{review.reviewerEmail || "N/A"}</p>
            <p className="text-sm text-gray-500">{review.date || "N/A"}</p>
          </div>

          {/* Comment */}
          <p className="text-gray-700 mt-2">{review.comment}</p>

          {/* Rating */}
          <div className="flex items-center text-yellow-500 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <MdStar
                key={i}
                className={i < Math.round(review.rating) ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500">No reviews yet.</p>
  )}
</div>

       
    </Container>
  );
};

export default SingleProductPage;
