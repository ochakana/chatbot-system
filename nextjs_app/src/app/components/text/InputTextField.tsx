// src/app/components/text/InputTextField.tsx
import React from "react";

interface InputTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputTextField: React.FC<InputTextFieldProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default InputTextField;
