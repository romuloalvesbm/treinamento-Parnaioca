'use client';

import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface FieldProps {
  label: string;
  type?: string;
  onChangeValue: (value: string) => void;
  children?: React.ReactNode;
}

export const Field = ({
  label,
  type = 'text',
  onChangeValue,
  children,
}: FieldProps) => {
  const changeValue = (value: string) => {
    onChangeValue(value);
  };
 console.log({type});
  const Icon = type == 'email' ? EnvelopeIcon : LockClosedIcon;

  return (
    <div className="flex flex-col">
      <label>{label}:</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type={type}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => changeValue(e.currentTarget.value)}
          className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               text-gray-900 placeholder-gray-400 bg-white transition duration-200 ease-in-out"
        />
      </div>
      {children}
    </div>

  );
};

export default Field;
