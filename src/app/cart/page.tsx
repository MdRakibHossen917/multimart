import CartProducts from '@/components/cartPage/CartProducts'
import Container from '@/components/container/Container'
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import React from 'react'
import { authOptions, isAuthConfigured } from '@/lib/auth';

const CartPage = async () => {
    if(!isAuthConfigured){
      redirect("/")
    }

    const session = await getServerSession(authOptions);

    if(!session?.user){
      redirect("/")
    }
  return (
    <Container className='py-10'>
       <CartProducts />
        </Container>
  )
}

export default CartPage