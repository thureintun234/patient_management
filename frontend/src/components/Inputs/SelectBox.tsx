import { Controller } from "react-hook-form";
import Select from "react-select";
import { AnyType } from "../../types/shared";


type SelectType = {
  value: AnyType;
  label: string;
}
type SelectBoxProps = {
  control: AnyType;
  options: SelectType[];
  name: string;
  rules: { required: boolean };
  onValueChange?: (val: SelectType) => void;
  multiple?: boolean;
  disabled?: boolean;
  isClearable?: boolean;
  label?: string | null;
  placeholder?: string;
};
function SelectBox({
  control,
  options,
  name,
  rules,
  onValueChange,
  multiple = false,
  disabled = false,
  isClearable = true,
  label = null,
  placeholder = "Select",
}: SelectBoxProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { invalid } }) => (
        <>
          <Select
            isDisabled={disabled}
            isMulti={multiple}
            isClearable={isClearable}
            options={options}
            placeholder={placeholder}
            {...field}
            onChange={(val: SelectType) => {
              field.onChange(val);
              if (onValueChange) onValueChange(val);
            }}
          />
          {invalid && (
            <span className="text-error">{`${
              label ? label : name
            } is required`}</span>
          )}
        </>
      )}
    />
  );
}
export default SelectBox;
