'use client';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  disabled?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button({
  label,
  onClick,
  outline,
  disabled,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative 
      disabled:opacity-70 
      disabled:cursor-not-allowed 
      rounded-lg 
      hover:opacity-80 
      transition w-full
      ${outline ? 'bg-white' : 'bg-rose-500'}
      ${outline ? 'border-black' : 'bg-rose-500'}
      ${outline ? 'text-black' : 'text-white'}
      ${small ? 'p-2' : 'p-3'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className='
            absolute
            left-4
            top-3
          '
        />
      )}
      {label}
    </button>
  );
}
