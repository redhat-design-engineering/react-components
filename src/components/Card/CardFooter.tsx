import { HTMLProps } from 'react';

// import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// export interface CardBodyProps extends HTMLProps<HTMLDivElement> {}
export const CardFooter = ({
  className,
  ...restProps
}: HTMLProps<HTMLDivElement>) => {
  return <div className={twMerge('', className)} {...restProps} />;
};

export default CardFooter;
