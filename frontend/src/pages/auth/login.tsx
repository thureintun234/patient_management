import React, { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData } from "./types";
import { FormItem } from "../../components/FormItem";
import { TextBox } from "../../components/Inputs";
import { Button } from "../../components/Button";
import useLogin from "./useLogin";

const schema = object().shape({
  email: string().required("Email is required"),
  password: string().required("Password is required"),
});

export const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { isLoading, login } = useLogin();

  const onSubmit = useCallback(
    async (data: FormData) => {
      await login({ email: data.email, password: data.password });
    },
    [login]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryDark">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center p-2"></div>
        <h4 className="text-2xl font-semibold text-center mb-6">
          Dashboard Login
        </h4>
       
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="mb-4">
            <Button
              type="submit"
              className="w-full flex items-center justify-center bg-secondary text-black py-2 px-4 rounded-md hover:bg-primary hover:text-secondary focus:outline-none"
              loading={isLoading}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
