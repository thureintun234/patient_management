import { FormItem } from "../../../components/FormItem";
import { Controller, useFormContext } from "react-hook-form";
import { TextBox } from "../../../components/Inputs";
import { FormData } from "./types";
import SelectBox from "../../../components/Inputs/SelectBox";
import { roleOptions } from "../../../lib/constants/options";

type Props = {
  isEdit?: boolean;
};
export const InputForm: React.FC<Props> = ({ isEdit = false }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div>
      <FormItem label="Name" className="mb-4">
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
      <FormItem label="Email" className="mb-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextBox
              {...field}
              placeholder="Enter your email"
              type="email"
              error={errors.email}
              errorMessage={errors.email?.message}
            />
          )}
        />
      </FormItem>
      <FormItem label="Role" className="mb-4">
        <SelectBox
          control={control}
          options={roleOptions}
          name="role"
          rules={{ required: true }}
        />
      </FormItem>
      {!isEdit && (
        <FormItem label="Password" className="mb-4">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextBox
                {...field}
                placeholder="Enter your password"
                type="password"
                error={errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </FormItem>
      )}
    </div>
  );
};
