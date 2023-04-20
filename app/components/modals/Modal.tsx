'use client';
import React, { useCallback } from 'react';

import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
  isOpen?: boolean;
  onCLose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disable?: boolean;
  secondaryAction?: () => void;
  secondarylabel?: string;
}

export default function Modal({
  isOpen,
  onCLose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disable,
  secondaryAction,
  secondarylabel,
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disable) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onCLose;
    }, 300);
  }, [disable, onCLose]);

  const handleSubmit = useCallback(() => {
    if (disable) {
      return;
    }
    onSubmit;
  }, [disable, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disable || !secondaryAction) {
      return;
    }
    secondaryAction;
  }, [disable, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
        <div
          className='
       relative
       w-full
       md:w-4/6
       lg:w-3/6
       xl:w-2/5
       my-6
       h-full
       lg:h-auto
       md:h-auto
       '
        >
          {/* content */}
          <div
            className={`
            translate 
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
           `}
          >
            <div
              className='
           translate 
           h-full
           lg:h-auto
           md::h-auto
           border-0
           rounded-lg
           shadow-lg
           relative
           flex
           flex-col
           w-full
           bg-white
           outline-none
           focus:outline-none
           '
            >
              {/* header */}
              <div
                className='
                flex 
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
              '
              >
                <button
                  className='
                  p-1
                  border-0
                  hover:opasity-70
                  transition
                  absolute
                  left-9
                '
                >
                  <IoMdClose onClick={handleClose} size={18} />
                </button>
                <div className='text-lg font-semibold'>{title} </div>
              </div>
              <div>
                {/* BODY */}
                <div
                  className='
                relative
                p-6
                flex-auto
                '
                >
                  {body}
                </div>
                {/* footer */}
                <div className='flex flex-col gap-2 p-6'>
                  <div
                    className='
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full
                    '
                  >
                    <Button label='my Button' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
