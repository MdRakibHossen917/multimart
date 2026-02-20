import React, { useEffect, useState } from "react";
import Title from "../Title";
import PriceFormat from "../PriceFormat";
import { ProductType } from "../../../type";
import Button from "../Button";

interface CartSummaryProps {
  cart: ProductType[];
}

const CartSummary = ({ cart }: CartSummaryProps) => {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);


  const handleCheckout = () => {
    alert("Checkout functionality is not implemented yet.");
  };

  useEffect(() => {
    let newSubtotal = 0;
    let newDiscount = 0;

    cart?.forEach((item) => {
      if (item.price && item.quantity) {
        newSubtotal += item.price * item.quantity;
      }

      if (item.price && item.quantity && item.discountPercentage) {
        newDiscount +=
          item.price *
          (item.discountPercentage / 100) *
          item.quantity;
      }
    });

    setSubtotal(newSubtotal);
    setDiscount(newDiscount);
  }, [cart]);

  const payableAmount = subtotal - discount;

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title>Cart Summary</Title>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Subtotal</Title>
          <PriceFormat amount={subtotal} className="text-lg font-bold" />
        </div>

        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Discount</Title>
          <PriceFormat amount={discount} className="text-lg font-bold" />
        </div>

        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Payable Amount</Title>
          <PriceFormat amount={payableAmount} className="text-lg font-bold" />
        </div>

        <Button
        onClick={handleCheckout}
        >Checkout</Button>
      </div>
    </div>
  );
};

export default CartSummary;