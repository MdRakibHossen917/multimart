import React from 'react';
import Container from '../container/Container';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets/banner';
import SocialLinks from '../SocialLinks';
 

const Footer = () => {
  return (
    <footer className='bg-[#f4f7f9] py-10 lg:py-20'>
      <Container className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>

        {/* Logo & Description */}
        <div className='flex flex-col gap-4'>
          <Link href='/' className='flex flex-col gap-2'>
            <Image src={logo} alt="MultiMart Logo" width={150} height={50} />
          </Link>
          <p className='text-gray-600'>
            MultiMart is your one-stop shop for quality products at the best prices.
          </p>
          <SocialLinks iconStyle='bg-[#ffffff] border border-#0C55AA shadow-md text-black p-2 text-lg hover:bg-#0C55AA hover:text-#ffffff cursor-pointer duration-200 rounded-md' />
        </div>

        {/* Placeholder for other footer sections */}
        <div>
          <h3 className='font-semibold mb-3'>My Account</h3>
          <ul className='space-y-2 text-gray-600'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/products'>Products</Link></li>
            <li><Link href='/categories'>Categories</Link></li>
            <li><Link href='/offers'>Offers</Link></li>
         
          </ul>
        </div>

        <div>
          <h3 className='font-semibold mb-3'>Customer Service</h3>
          <ul className='space-y-2 text-gray-600'>
            <li><Link href='/contact'>Contact Us</Link></li>
            <li><Link href='/faq'>FAQ</Link></li>
            <li><Link href='/shipping'>Shipping</Link></li>
            <li><Link href='/returns'>Returns</Link></li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold mb-3'>Newsletter</h3>
          <p className='text-gray-600 mb-3'>Subscribe to our newsletter for latest updates.</p>
          <form className='flex gap-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='border p-2 rounded-md flex-1'
            />
            <button type='submit' className='bg-blue-600 text-white px-4 rounded-md'>
              Subscribe
            </button>
          </form>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
