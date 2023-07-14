import { HTMLProps } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import { CardTheme } from './CardTheme';

export interface CardProps extends HTMLProps<HTMLDivElement> {
  theme?: keyof typeof CardTheme;
}
const CardComponent = ({
  theme = CardTheme.light,
  className,
  ...restProps
}: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx('border p-lg dark:text-white lg:p-xl', {
          'border-[#D2D2D2] bg-white dark:border-[#6A6E73] dark:bg-[#151515]':
            theme === CardTheme.light,
          'border-[#D2D2D2] bg-[#F0F0F0] dark:border-[#6A6E73] dark:bg-[#3C3F42]':
            theme === CardTheme.lightGray,
        }),
        className,
      )}
      {...restProps}
    />
  );
};

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
