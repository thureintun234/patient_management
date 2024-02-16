import React, { useCallback, useEffect } from "react";
import { Modal } from "../../../components/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Admin, FormData } from "./types";
import { date, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/Button";
import { InputForm } from "./inputForm";
import { updateData } from "../../../lib/services/admin";

const schema = object().shape({
  name: string().required("Name is required"),
  email: string().required("Email is required"),
  role: object()
  .shape({
    value: string().required(),
    label: string().required(),
  })
  .required("Role is required"),});

type PropsType = {
  isUpdateModalOpen: boolean;
  toggle: () => void;
  editData: Admin | null;
  refetch: () => void;

};

export const AdminUpdate: React.FC<PropsType> = ({
  isUpdateModalOpen,
  toggle,
  editData,
  refetch,
}) => {
  const methods = useForm<Omit<FormData, "password">>({
    resolver: yupResolver(schema),
  });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    if (editData) {
      reset({
        name: editData?.name,
        email: editData?.email,
        role: {value: editData?.role, label: editData?.role},
      });
    }
  }, [editData, reset]);

  const submit: SubmitHandler<Omit<FormData, "password">> = useCallback(
    async (values) => {
      await updateData({ id: editData?.id as number, data: {
        name: values?.name,
        email: values?.email,
        role: values?.role?.value,
      } });
      reset();
      toggle();
      refetch();
    },
    [editData?.id, refetch, reset, toggle]
  );
  return (
    <Modal title="Update Admin" open={isUpdateModalOpen} onClose={toggle}>
      <div className="w-full flex justify-center px-8">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submit)} className="w-full">
            <InputForm isEdit={true} />
            <Button
              type="submit"
              className="bg-primary text-white px-3 py-1 rounded-lg"
            >
              Update
            </Button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};
