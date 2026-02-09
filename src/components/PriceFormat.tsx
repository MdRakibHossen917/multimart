import { twMerge } from 'tailwind-merge';

interface PriceFormatProps {
  amount: number;
  className?: string;
}

const PriceFormat = ({ amount, className }: PriceFormatProps) => {
  const formattedPrice = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <span className={twMerge('font-medium', className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormat;
