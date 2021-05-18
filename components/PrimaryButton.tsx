import React from 'react';

type PrimaryButtonType = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  buttonText: string,
  type: "button" | "submit" | "reset" | undefined,
}

export const PrimaryButton = ({ onClick, buttonText, type } : PrimaryButtonType) : JSX.Element=> {
  return (
    <>
      <button
        className="app-primary-btn"
        type={type}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
};

export default PrimaryButton;