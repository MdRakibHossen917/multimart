import React from 'react'
import { LiaUser } from 'react-icons/lia'

const SignInButton = () => {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer text-sm"
    >
      <div className="border-b border-gray-700 p-1.5 rounded-full text-xl">
        <LiaUser />
      </div>
      <div>
        <p className="text-xs">Hello, Guests</p>
        <p className="font-medium">Login/Register</p>
      </div>
    </div>
  )
}

export default SignInButton