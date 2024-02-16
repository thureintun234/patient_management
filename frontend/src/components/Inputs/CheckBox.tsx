import  { FC, InputHTMLAttributes, ChangeEvent } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

const Checkbox: FC<CheckboxProps> = ({ label, onChange, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        onChange={onChange}
        {...props}
      />
      <label className="ml-2 text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;
