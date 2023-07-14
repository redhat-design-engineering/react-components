import { HTMLProps } from 'react';

// import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// export interface CardBodyProps extends HTMLProps<HTMLDivElement> {}
export const CardBody = ({
  className,
  ...restProps
}: HTMLProps<HTMLDivElement>) => {
  return <div className={twMerge(' mb-lg', className)} {...restProps} />;
};

export default CardBody;
