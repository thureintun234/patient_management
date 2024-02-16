import { FormItem } from "../../../components/FormItem";
import { Controller, useFormContext } from "react-hook-form";
import { TextBox } from "../../../components/Inputs";
import { FormData } from "./types";

type Props = {
  isEdit?: boolean;
};
export const InputForm: React.FC<Props> = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div>
      <FormItem label="name" className="mb-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextBox
              {...field}
              placeholder="Enter your name"
              type="text"
              error={errors.name}
              errorMessage={errors.name?.message}
            />
          )}
        />
      </FormItem>
    </div>
  );
};
