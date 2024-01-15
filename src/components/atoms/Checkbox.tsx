import React, { useState, ChangeEvent } from "react";

interface ICheckbox {
  checked: boolean;
  label: string;
  className?: string;
}

const Checkbox: React.FC<ICheckbox> = ({ checked, label, className }: ICheckbox) => {
  const [onChecked, setChecked] = useState<boolean>(checked);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={`flex items-center mb-4 ${className}`}>
      <input
        id="checked-checkbox"
        type="checkbox"
        checked={onChecked}
        onChange={handleCheckboxChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
