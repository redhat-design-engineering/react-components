import { HTMLProps } from 'react';

// import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// export interface CardBodyProps extends HTMLProps<HTMLDivElement> {}
export const CardHeader = ({
  className,
  ...restProps
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={twMerge('mb-lg lg:mb-xl', className)} {...restProps} />
  );
};

export default CardHeader;
