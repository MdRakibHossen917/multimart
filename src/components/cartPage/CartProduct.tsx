import React from 'react'
import { ProductType } from '../../../type'
import Link from 'next/link'
import Image from 'next/image'

const CartProduct = ({ product }: { product: ProductType }) => {
  return (
    <div className='flex py-2 sm:py-4'>
        <Link
               href={{
                 pathname: `products/${product?.id}`,
                 query: { id: product?.id },
               }}
             >
               <div className="relative h-24 sm:h-48 sm:w-48  overflow-hidden rounded-lg bg-gray-50">
                 {/* Image */}
                 <Image
                   src={product?.images[0]}
                   alt={"product-image"}
                   width={300}
                   height={300}
                   priority={true}
                   sizes="(max-width: 768px) 100vw, 25vw"
                   className="h-full w-full p-2 object-contain transition-transform duration-500 group-hover:scale-110"
                 />
               </div>
             </Link> 
    </div>
  )
}

export default CartProduct