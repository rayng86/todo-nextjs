import React from 'react';

type TextFormFieldProps = {
  onChange: (val: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  label: string,
  inputType: string,
  inputName: string,
  placeholder: string,
}

const TextFormField = ({
  onChange,
  value,
  label,
  inputType,
  inputName,
  placeholder,
}: TextFormFieldProps) : JSX.Element => (
  <div className="flex flex-col mb-6">
    <label htmlFor={inputName}>
      {label}
    </label>
    <input
      className="app-input-text-field"
      placeholder={placeholder}
      required
      type={inputType}
      name={inputName}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextFormField;