import Link from "next/link";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";


const HeaderIcons = () => {
  return (
    <div className="flex item-center justify-center gap-1.5">
      <Link href={"/favorite"} className="relative text-2xl">
        <MdOutlineFavoriteBorder />
        <span className="absolute -top-1 -right-2 text-[10px] font-medium  w-4 h-4 bg-[#115061]  hover:bg-[#115061] text-white rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
      <Link href={"/cart"} className="relative text-2xl">
      <BiShoppingBag />
        <span className="absolute -top-1 -right-2 text-[10px] font-medium  w-4 h-4 bg-[#115061] hover:bg-[#115061] text-white rounded-full  flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
};

export default HeaderIcons;
