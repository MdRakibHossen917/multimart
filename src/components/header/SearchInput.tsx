'use client'
import React, { useState } from 'react';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';

const SearchInput = () => {
    const [Search,setSearch] =useState("");

    return (
        <div className='hidden md:inline-flex flex-1 relative h-10'>
           <input type='text' placeholder='Search Products here'  className='w-full h-full border-2 border-[#0C55AA] px-4 outline-none' 
           value={Search}
           onChange={(e) => setSearch(e.target.value)}
           />
           {Search && (
        <RiCloseLine
          onClick={() => setSearch('')}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
           <span><RiSearchLine className='w-10 h-10 inline-flex bg-[#296ab4] text-white items-center justify-center p-2 absolute top-0  right-0 border-[#0C55AA] hover:bg-[#0C55AA] cursor-pointer duration-200' />
           </span>
            
        </div>
    );
};

export default SearchInput;