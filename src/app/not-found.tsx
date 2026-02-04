import React from "react";
import Link from "next/link";
import Container from "@/components/container/Container";

const Not_Found = () => {
  return (
    <Container>
        <div className="py-20 md:py-10 flex flex-col items-center justify-center bg-[#ffffff]  ">
      <h1 className="text-6xl md:text-8xl font-bold text-[#115061]">404</h1>
      <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-700">
        Oops! Page not found
      </p>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#115061] text-white font-semibold rounded-md hover:bg-[#0a3f4f] transition"
      >
        Go Back Home
      </Link>
    </div>
    </Container>
  );
};

export default Not_Found;
