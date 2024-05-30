import React from 'react';
import { CustomInputProps } from '../../utils/interfaces';

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, onKeyDown, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
