"use client";

import { useSelector } from "react-redux";
import { ProductType, StateType } from "../../../type";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";

const CartProducts = () => {
  const cart = useSelector((state: StateType) => state.multimart.cart);

  if (!cart?.length) {
    return (
      <p className="text-center text-gray-500">
        No products in the cart.
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
        Shopping Cart
      </h1>

      <div className="mt-10 lg:grid lg:grid-cols-12 gap-x-12 xl:gap-x-16">
        <section className="lg:col-span-7">
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {cart.map((product: ProductType) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
        </section>
        {/* cart summary */}
        <CartSummary cart={cart}  />
      </div>
    </div>
  );
};

export default CartProducts;
