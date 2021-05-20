import React, { ReactNode } from 'react';

export type TextFormFieldProps = {
  onChange: (val: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  label?: string,
  inputType?: string,
  inputName?: string,
  placeholder?: string,
  required?: boolean,
}

const TextFormField = ({
  onChange,
  value,
  label,
  inputType='text',
  inputName,
  placeholder,
  required,
}: TextFormFieldProps) : JSX.Element => (
  <div className="flex flex-col mb-6">
    {label && <label htmlFor={inputName}>
      {label}
    </label>}
    <input
      className="app-input-text-field"
      placeholder={placeholder}
      required={required}
      type={inputType}
      name={inputName}
      autoComplete={inputName}
      value={value}
      onChange={onChange}
    />
  </div>
);
      required
      type={inputType}
      name={inputName}
      autoComplete={inputName}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextFormField;