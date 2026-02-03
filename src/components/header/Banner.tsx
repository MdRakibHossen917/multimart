import React from "react";
import Container from "../container/Container";
import { banner } from "@/constants";

const Banner = () => {
  return (
    <div className="bg-[#115061] py-20 text-[#ffffff] ">
      <Container>
        <p className="text-base font-semibold">{banner?.priceText}</p>
        <h2 className="text-5xl font-bold max-w-xl">{banner?.title}</h2>
        <p className="text-lg font-bold ">
          {banner?.textOne}
          <span className="text-[#FFD43A] mx-1">{banner?.offerPrice} </span>
          {banner?.textTwo}
        </p>
        <button>Shop Now</button>

      </Container>
    </div>
  );
};

export default Banner;
