import React from 'react'

export default function Button({
    type = 'submit',
    className = '',
    processing,
    children,
  }) {
    return (
      <button
        type={type}
        className={
          `py-2 px-4  bg-primary focus:ring-primary-500 focus:ring-offset-primary-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  ${
            processing && 'opacity-25'
          } ` + className
        }
        disabled={processing}
      >
        {children}
      </button>
    );
  }