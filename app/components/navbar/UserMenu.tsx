'use client';
import React, { useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

export default function UserMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='hidden md:block text-sm font-semibold py-3 px-2 rounded-full hover:bg-neutral-100 transition cursor cursor-pointer'
        >
          airbnb your home
        </div>
        <div
          onClick={() => {
            toggleOpen();
          }}
          className='py-4 md:py-1 md px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && ( // This is the dropdown
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem label={'login'} onClick={() => {}} />
              <MenuItem label={'sign up'} onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
}
