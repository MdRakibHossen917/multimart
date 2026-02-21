import Container from "../container/Container";
import Image from "next/image";
import { MultiMartLogo } from "@/assets/banner";
import SearchInput from "./SearchInput";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";
import MobileNavigation from "./MobileNavigation";
import SignInButton from "../SignInButton";

const MiddleHeader = () => {
  return (
    <div className="border-b-2 border-b-gray-500/20">
      <Container className="py-5 flex items-center justify-between gap-4 md:gap-6 lg:gap-20">
        <Link href="/">
          <Image
            src={MultiMartLogo}
            alt="MultiMartLogo.png"
            className="w-28 cursor-pointer priority"
          />
        </Link>
        <SearchInput />
        <div className="hidden md:inline-flex items-center justify-center gap-3 ">
         <SignInButton />
          <HeaderIcons />
        </div>

        {/* MobileNavigation */}
        <MobileNavigation />
      </Container>
    </div>
  );
};

export default MiddleHeader;
