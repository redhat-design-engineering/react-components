import { HTMLProps } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SpinnerProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  svgClassName?: string;
}
export const Spinner = ({
  size = 'lg',
  className,
  svgClassName,
  children,
  ...restProps
}: SpinnerProps) => {
  return (
    <div
      role="status"
      className={twMerge('content-center dark:text-white', className)}
      {...restProps}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        aria-live="polite"
        className={twMerge(
          clsx({
            'h-4 w-4': size === 'sm',
            'h-10 w-10': size === 'md',
            'h-16 w-16': size === 'lg',
          }),
          svgClassName,
        )}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          vectorEffect="non-scaling-stroke"
          className="stroke-[#f2f2f2] dark:stroke-[#383838]"
          strokeWidth={size === 'sm' ? 2 : 6}
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          vectorEffect="non-scaling-stroke"
          className={clsx(
            'origin-[50%_50%] -rotate-90 stroke-[#0066cc] dark:stroke-[#73bcf7]',
            {
              'animate-[rh-spinner-small-animation-dash_1.4s_ease-out_infinite] stroke-[3px]':
                size === 'sm',
              'animate-[rh-spinner-animation-dash_1.4s_ease-out_infinite] stroke-[4px]':
                size === 'md',
              'animate-[rh-spinner-animation-dash_1.4s_ease-out_infinite] stroke-[6px]':
                size === 'lg',
            },
          )}
          strokeLinecap="round"
          strokeDasharray={size === 'sm' ? 71 : 283}
          strokeDashoffset={size === 'sm' ? 71 : 280}
        ></circle>
      </svg>
      {children}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
