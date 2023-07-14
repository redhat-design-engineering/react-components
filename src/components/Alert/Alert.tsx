import { ElementType, HTMLProps } from 'react';

import { ReactComponent as faBellIcon } from '@fortawesome/fontawesome-free/svgs/solid/bell.svg';
import { ReactComponent as faCircleCheckIcon } from '@fortawesome/fontawesome-free/svgs/solid/circle-check.svg';
import { ReactComponent as faCircleExclamationIcon } from '@fortawesome/fontawesome-free/svgs/solid/circle-exclamation.svg';
import { ReactComponent as faCircleInfoIcon } from '@fortawesome/fontawesome-free/svgs/solid/circle-info.svg';
import { ReactComponent as faTriangleExclamationIcon } from '@fortawesome/fontawesome-free/svgs/solid/triangle-exclamation.svg';
import { ReactComponent as FaXMarkIcon } from '@fortawesome/fontawesome-free/svgs/solid/xmark.svg';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import AlertVariant from './AlertVariant';

const iconMap = {
  [AlertVariant.Default]: faBellIcon,
  [AlertVariant.Info]: faCircleInfoIcon,
  [AlertVariant.Success]: faCircleCheckIcon,
  [AlertVariant.Warning]: faTriangleExclamationIcon,
  [AlertVariant.Danger]: faCircleExclamationIcon,
  [AlertVariant.Disabled]: faCircleInfoIcon,
};

export interface AlertProps extends HTMLProps<HTMLDivElement> {
  title: string;
  titleTag?: ElementType;
  variant: keyof typeof AlertVariant;
  showClose?: boolean;
  onClose?: () => void;
  isInline: boolean;
}

export const Alert = ({
  variant = AlertVariant.Default,
  isInline = false,
  title,
  titleTag: TitleTag = 'h4',
  className,
  children,
  showClose = true,
  onClose,
  ...restProps
}: AlertProps) => {
  const Icon = iconMap[variant];
  return (
    <div
      className={twMerge(
        clsx('border-t-2 p-md', {
          'shadow-lg dark:bg-[#8A8D90]': !isInline,
          'border-t-[#009596]': variant === AlertVariant.Default,
          'bg-[#F2F9F9]': variant === AlertVariant.Default && isInline,
          'border-t-[#2B9AF3]': variant === AlertVariant.Info,
          'bg-[#E7F1FA]': variant === AlertVariant.Info && isInline,
          'border-t-[#3E8635]': variant === AlertVariant.Success,
          'bg-[#F3FAF2]': variant === AlertVariant.Success && isInline,
          'border-t-[#F0AB00]': variant === AlertVariant.Warning,
          'bg-[#FDF7E7]': variant === AlertVariant.Warning && isInline,
          'border-t-[#C9190B]': variant === AlertVariant.Danger,
          'bg-[#FAEAE8]': variant === AlertVariant.Danger && isInline,
          'border-t-[#6A6E73]': variant === AlertVariant.Disabled,
          'bg-[#F0F0F0]': variant === AlertVariant.Disabled && isInline,
        }),
        className,
      )}
      {...restProps}
    >
      <div className="grid grid-cols-[max-content_1fr_max-content] items-center gap-sm">
        <Icon
          fill="currentColor"
          className={clsx('inline h-4 w-4 basis-4', {
            'text-[#009596]': variant === AlertVariant.Default,
            'text-[#2B9AF3]': variant === AlertVariant.Info,
            'text-[#3E8635]': variant === AlertVariant.Success,
            'text-[#F0AB00]': variant === AlertVariant.Warning,
            'text-[#C9190B]': variant === AlertVariant.Danger,
            'text-[#6A6E73]': variant === AlertVariant.Disabled,
          })}
        />
        <TitleTag
          className={clsx('text-sm font-bold', {
            'text-[#003737]': variant === AlertVariant.Default,
            'text-[#002952]': variant === AlertVariant.Info,
            'text-[#1E4F18]': variant === AlertVariant.Success,
            'text-[#795600]': variant === AlertVariant.Warning,
            'text-[#470000]': variant === AlertVariant.Danger,
            'text-[#6A6E73]': variant === AlertVariant.Disabled,
          })}
        >
          {title}
        </TitleTag>

        {showClose && (
          <button onClick={onClose} aria-label="Close banner">
            <FaXMarkIcon fill="currentColor" className="w-r h-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
        {children && (
          <div className="col-start-2 row-start-2 text-[#151515]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
