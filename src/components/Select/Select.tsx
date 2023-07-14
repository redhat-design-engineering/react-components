import { HTMLProps, useState } from 'react';

import { ReactComponent as CaretDownIcon } from '@fortawesome/fontawesome-free/svgs/solid/caret-down.svg';
import { ReactComponent as FaCheckIcon } from '@fortawesome/fontawesome-free/svgs/solid/check.svg';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SelectOption<T> {
  label?: string;
  value: T;
}

export interface SelectProps<T>
  extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  options: SelectOption<T>[];
  authenticated?: boolean;
  defaultValue?: string;
}

export const Select = <T,>({
  options,
  defaultValue,
  className,
  ...restProps
}: SelectProps<T>) => {
  const [selected, setSelected] = useState(
    options.find((opt) => opt.value === defaultValue),
  );

  const handleOnChange = (selectedOpt: SelectOption<T>) => {
    setSelected(selectedOpt);
  };

  return (
    <Listbox value={selected} onChange={handleOnChange}>
      <div className={twMerge('relative mt-1', className)} {...restProps}>
        <Listbox.Button className="relative w-full cursor-default border border-[#F0F0F0] border-b-[#B8BBBE] bg-[#FFF] pl-3 pr-10 text-left text-base leading-8 hover:border-b-[#06C] focus:outline-none focus-visible:ring-2 dark:border-[#212427] dark:border-b-[#3C3F42] dark:bg-[#151515] ">
          <span className="block truncate">{selected?.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <CaretDownIcon className="h-4 w-4" />
          </span>
          <span className="sr-only">Select</span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-50 mt-0.5 w-full overflow-auto bg-[#FFF] text-base leading-8 shadow-xl focus:outline-none dark:bg-[#151515]">
          {options.map((opt, optIdx) => (
            <Listbox.Option
              key={optIdx}
              className={({ active }) =>
                clsx({
                  'relative cursor-default select-none py-2 pl-4 pr-4': true,
                  'bg-[#F0F0F0] dark:bg-[#212427]': active,
                })
              }
              aria-label={`${opt.label}`}
              value={opt}
            >
              {({ selected }) => (
                <>
                  <span className="block truncate">{opt.label}</span>
                  {selected ? (
                    <span className="text-link absolute inset-y-0 right-0 flex items-center pr-4">
                      <FaCheckIcon className="h-3 w-3" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Select;
