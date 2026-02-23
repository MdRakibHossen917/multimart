import { navigation } from "@/constants";
import Container from "../container/Container";
import Link from "next/link";
import { getServerSession } from "next-auth";
import SignOut from "../SignOut";
import { authOptions } from "@/lib/auth";

const BottomHeader = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div className="border-b border-b-gray-500/20 ">
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Navigation Links */}
          <div className="flex gap-2 md:gap-5 font-semibold hover:text-blue-600 text-xs md:text-sm">
            {navigation?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-800"
              >
                {item.title}
              </Link>
            ))}

            {session?.user ? (
              <SignOut />
            ) : (
              <p className="text-gray-500 hover:text-blue-600 duration-200">
                Signin to your view cart
              </p>
            )}
          </div>

          {/* Hotline */}
          <p className="hidden md:inline-flex text-gray-500 font-medium text-xs md:text-sm">
            Hotline:
            <span className="text-black font-bold cursor-pointer">
              {" "}
              +88 01300981501
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;