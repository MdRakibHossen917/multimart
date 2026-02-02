import Container from "../container/Container";
import { FaTruckFast } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className="flex items-center justify-between ">
        <p className="w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1">
          <FaTruckFast className="mr-1 text-[#f1a129] text-2xl -scale-x-100" /> Free Shipping
          on Orders Over $50+
        </p>
        <div className="hidden md:inline-flex items-center text-sm text-white ">
          <p className="headerTopMenu">
            English <IoChevronDown className="text-white mt-1" />
          </p>
           <p className="headerTopMenu">
            USD <IoChevronDown className="text-white mt-1" />
          </p>
           <p className="headerTopMenu">
            Settings <IoChevronDown className="text-white mt-1" />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
