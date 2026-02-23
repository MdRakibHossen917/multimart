"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LiaUser } from "react-icons/lia";

const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <>
      {session?.user ? (
        <div className="flex items-center gap-2 text-sm">
          <Image
            src={session?.user?.image || "/default-avatar.png"}
            alt='User Image'
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-xs">{session.user.name}</p>
            <button
              onClick={() => signOut()}
              className="font-medium hover:underline cursor-pointer text-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="flex items-center gap-2 cursor-pointer text-sm"
        >
          <div className="border-b border-gray-700 p-1.5 rounded-full text-xl">
            <LiaUser />
          </div>
          <div>
            <p className="text-xs">Hello, Guest</p>
            <p className="font-medium">Login / Register</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInButton;