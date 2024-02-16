import React from "react";
import { Controller } from "react-hook-form";
import { AnyType } from "../../types/shared";

interface DatePickerProps {
  name: string;
  control: AnyType;
  rules: { required: boolean };
  onValueChange?: (val: AnyType) => void;
  placeholder?: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  name,
  control,
  rules,
  onValueChange,
  placeholder = "Select Date",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { invalid } }) => (
        <>
          <input
          type="date"
          {...field}
          placeholder={placeholder}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          onChange={(e) => {
            const selectedDate = e.target.value;
            field.onChange(selectedDate);
            if (onValueChange) onValueChange(selectedDate);
          }}
        />
          {invalid && (
            <span className="text-error">{`${
              name
            } is required`}</span>
          )}
        </>
      )}
    />
  );
};

export default CustomDatePicker;
