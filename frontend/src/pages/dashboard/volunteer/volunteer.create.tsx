import React, { useCallback } from "react";
import { Modal } from "../../../components/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "./types";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/Button";
import { InputForm } from "./inputForm";
import { createData } from "../../../lib/services/volunteer";

const schema = object().shape({
  name: string().required("Name is required"),
  email: string().required("Email is required"),
  township: object()
    .shape({
      value: string().required(),
      label: string().required(),
    })
    .required("township is required"),
});

type PropsType = {
  isModalOpen: boolean;
  toggle: () => void;
  refetch: () => void;
};

export const AdminCreate: React.FC<PropsType> = ({ isModalOpen, toggle,refetch, }) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { reset, handleSubmit  } = methods;

  const submit: SubmitHandler<FormData> = useCallback(
    async (values) => {
      await createData({ data: {
        name: values.name,
        email: values.email,
        township: values.township?.value,
      } });
      reset();
      toggle();
      refetch();
    },
    [refetch, reset, toggle]
  );
  return (
    <Modal title="Create Admin" open={isModalOpen} onClose={toggle}>
      <div className="w-full flex justify-center px-8">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submit)} className="w-full">
            <InputForm />
            <Button
              className="bg-primary text-white px-3 py-1 rounded-lg"
              type="submit"
            >
              Save
            </Button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};
