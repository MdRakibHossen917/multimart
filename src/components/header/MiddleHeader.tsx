import React from 'react';
import Container from '../container/Container';
import Image from 'next/image';
import { MultiMartLogo } from '@/assets/banner';







const MiddleHeader = () => {
    return (
        <div className='border-b-gray-400'>
            <Container className='py-5 flex items-center justify-between gap-4 md:gap-6 lg:gap-20 '>
                <Image src={MultiMartLogo} alt='MultiMartLogo.png' className='w-28'/>
                <div>Search</div>
                <div>Navigation Menu</div>

            </Container>
           
        </div>
    );
};

export default MiddleHeader;