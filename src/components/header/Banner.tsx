import React from "react";
import Container from "../container/Container";
import { banner } from "@/constants";
import Image from "next/image";
import Button from "../Button";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-[#115061] py-12 md:py-12 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left Content */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-sm md:text-base font-semibold">
              {banner?.priceText}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold max-w-xl">
              {banner?.title}
            </h2>

            <p className="text-base md:text-lg font-bold">
              {banner?.textOne}
              <span className="text-[#ffd43a] mx-1">{banner?.offerPrice}</span>
              {banner?.textTwo}
            </p>

            <Button
              href={banner?.buttonLink}
              className="flex items-center justify-center gap-1 bg-white text-black rounded-md w-32 px-0 text-sm font-semibold hover:bg-transparent hover:text-white py-3 border border-transparent hover:border-white/40 duration-200"
            >
              Shop Now <GoArrowRight />
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={banner?.image}
              alt="bannerImage"
              width={400}
              height={400}
              priority
              className="w-[220px] md:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
