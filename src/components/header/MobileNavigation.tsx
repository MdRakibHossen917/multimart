'use client'

import React, { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { MdClose } from 'react-icons/md'

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

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
        <div className="fixed inset-0 flex items-start justify-center pt-16">
          <DialogPanel className="relative w-[94%] max-w-md bg-black border border-[#55585b] rounded-lg p-6 animate-slideDown">

            {/* Close Button - Right Corner */}
            <button
              onClick={close}
              className="absolute top-3 right-3 text-2xl text-white/50 hover:text-red-500 transition"
            >
              <MdClose />
            </button>

            {/* Title */}
            <DialogTitle className="text-lg font-semibold text-white mb-4">
              Mobile Menu
            </DialogTitle>

            {/* Navigation */}
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Products</a>
              <a href="#" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
            </nav>

          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileNavigation
