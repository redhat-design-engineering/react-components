import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: keyof typeof ButtonVariant;
  danger?: boolean;
}

export const Button = ({
  variant = ButtonVariant.Primary,
  danger,
  className,
  disabled = false,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        clsx(
          {
            'cursor-pointer': !disabled,
            '!bg-[#e0e0e0] !text-[#4d4d4d]': disabled,
            'rounded-[3px] py-sm pe-lg ps-lg': variant !== ButtonVariant.Close,
            'p-sm': variant === ButtonVariant.Close,
            'bg-[#0066CC] text-[#FFFFFF] hover:bg-[#004080] dark:bg-[#0066CC] dark:text-[#FFFFFF] dark:hover:bg-[#004080]':
              variant === ButtonVariant.Primary && !danger,
            'text-[#0066CC] hover:text-[#004080] dark:text-[#2B9AF3] dark:hover:text-[#004080]':
              variant === ButtonVariant.Link,
            'border-[#C9190B] text-[#C9190B] after:border-[#C9190B] dark:text-[#C9190B]':
              danger && variant === ButtonVariant.Secondary,
            'bg-[#C9190B] text-[#FFFFFF] hover:bg-[#A30000] dark:bg-[#FF542E] dark:text-[#151515] dark:hover:bg-[#FF8266]':
              danger && variant !== ButtonVariant.Secondary,
            'after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[3px] after:border after:content-[""] after:hover:border-[2px]':
              variant === ButtonVariant.Secondary ||
              variant === ButtonVariant.Tertiary,
            'border-[#0066CC] text-[#0066CC] after:border-[#0066CC] dark:border-[#2B9AF3] dark:text-[#2B9AF3]':
              variant === ButtonVariant.Secondary,
            'border-[#151515] text-[#151515] after:border-[#151515] dark:border-[#FFFFFF] dark:text-[#FFFFFF] dark:after:border-[#FFFFFF]':
              variant === ButtonVariant.Tertiary,
          },
          'relative text-md outline-offset-1 focus:outline focus:outline-2 focus:outline-[#0066cc]',
        ),
        className,
      )}
      disabled={disabled}
      {...restProps}
    />
  );
};
