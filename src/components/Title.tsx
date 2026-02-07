import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TitleProps {
    children: React.ReactNode;
    className?: string
}

const Title = ({children,className} : TitleProps) => {
  return (
    <h2 className={twMerge('text-xl font-semibold flex items-center', className)}>
        {children}

    </h2>
  )
}

export default Title