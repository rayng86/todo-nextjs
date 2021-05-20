import React, { ReactNode } from 'react';

type PrimaryButtonType = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  buttonText?: string,
  type?: "button" | "submit" | "reset" | undefined,
  children?: ReactNode,
}

export const PrimaryButton = ({ children, onClick, buttonText, type='button' } : PrimaryButtonType) : JSX.Element=> {
  return (
    <>
      <button
        className="app-primary-btn"
        type={type}
        onClick={onClick}
      >
        {children ? children : buttonText}
      </button>
    </>
  );
};

export default PrimaryButton;