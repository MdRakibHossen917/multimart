"use client";

import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { navigation } from "@/constants";
import Link from "next/link";
import SocialLinks from "../SocialLinks";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Menu Icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="md:hidden text-2xl text-gray-500 hover:bg-[#0C55AA] p-2 rounded cursor-pointer transition"
      >
        <RiMenu3Fill />
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog open={isOpen} onClose={close} className="relative z-50">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/80" />

        {/* Panel Wrapper */}
        <div className="fixed inset-0 flex items-start justify-center pt-14">
          <DialogPanel className="relative w-[94%] max-w-md bg-black border border-[#55585b] rounded-lg p-6 animate-slideDown">
            <div className="flex items-center justify-between mb-4">
              {/* Title */}
              <DialogTitle className="text-lg font-semibold text-white   ">
                Navigation Menu
              </DialogTitle>
              {/* Close Button  */}
              <button
                onClick={close}
                className="    text-2xl text-white/50 hover:text-red-500 transition"
              >
                <MdClose />
              </button>
            </div>

            {/* Navigation */}

            <div className="flex flex-col divide-y divide-white/10">
              {navigation?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={close}
                  className="group flex items-center gap-3 py-3 text-white transition
                 hover:text-[#0C55AA]"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/80
                   transition group-hover:border-[#0C55AA]"
                  />
                  <span className="text-base">{item.title}</span>

                  
                </Link>
              ))}
            </div>

               {/* Social links */}
            
            <SocialLinks/>

                 
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
