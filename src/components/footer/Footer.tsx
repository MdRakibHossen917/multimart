import React from "react";
import Container from "../container/Container";
import Link from "next/link";
import Image from "next/image";
import { MultiMartLogo } from "@/assets/banner";
import SocialLinks from "../SocialLinks";
 
import { footerInformation, navigation } from "@/constants";
import { GoDotFill } from "react-icons/go";
import Title from "../Title";

const Footer = () => {
  return (
    <footer className="bg-[#f4f7f9] py-10 lg:py-20">
      <Container className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col gap-2">
            <Image src={MultiMartLogo} alt="MultiMart Logo" width={150} height={50} />
          </Link>
          <p className="text-gray-600">
            MultiMart is your one-stop shop for quality products at the best
            prices.
          </p>
          <SocialLinks iconStyle="bg-[#ffffff]  border border-[#115061] shadow-md text-black p-2 text-lg hover:bg-[#115061] hover:text-[#ffffff] cursor-pointer duration-200 rounded-md" />
        </div>
<div>
  
        {/* Placeholder for other footer sections */}
        <Title>My Account</Title>

        <ul className="space-y-2 text-gray-600">
          {navigation.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center gap-x-2 text-gray-700 hover:text-[#115061] duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
</div>

        <div>
          <Title className="">Information</Title>
           <ul className="space-y-2 text-gray-600">
          {footerInformation.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center gap-x-2 text-gray-700 hover:text-[#115061] duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        </div>

        <div>
          <Title className=" ">Newsletter</Title>
          <p className="text-gray-600 mb-3">
            Subscribe to our newsletter for latest updates.
          </p>
          <form className="flex gap-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 text-xs rounded-md flex-1"
            />
            <button
              type="submit"
              className="bg-[#115061] text-white px-2 rounded-md text-xs"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
