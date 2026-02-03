import Container from "../container/Container";
import Image from "next/image";
import { MultiMartLogo } from "@/assets/banner";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import HeaderIcons from "./HeaderIcons";
import MobileNavigation from "./MobileNavigation";

const MiddleHeader = () => {
  return (
    <div className="border-b-2 border-b-gray-500/20">
      <Container className="py-5 flex items-center justify-between gap-4 md:gap-6 lg:gap-20">
        <Link href="/">
          <Image
            src={MultiMartLogo}
            alt="MultiMartLogo.png"
            className="w-28 cursor-pointer"
          />
        </Link>
        <SearchInput />
        <div className="hidden md:inline-flex items-center justify-center gap-3 ">
             <Link
          href="/signin"
          className="flex items-center gap-2 cursor-pointer text-sm"
        >
          <div className="border-b border-gray-700 p-1.5 rounded-full text-xl">
            <LiaUser />
          </div>
          <div>
            <p className="text-xs ">Hello, Guests</p>
            <p className="font-medium">Login/Register</p>
          </div>
        </Link>
        <HeaderIcons />

        </div>

        {/* MobileNavigation */}
        <MobileNavigation/>
       
      </Container>
    </div>
  );
};

export default MiddleHeader;
