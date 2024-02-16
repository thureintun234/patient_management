import React, { useCallback, useEffect } from "react";
import { Modal } from "../../../components/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {  FormData, Volunteer } from "./types";
import {  object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/Button";
import { InputForm } from "./inputForm";
import { updateData } from "../../../lib/services/volunteer";

const schema = object().shape({
  name: string().required("Name is required"),
  email: string().required("Email is required"),
  township: object()
  .shape({
    value: string().required(),
    label: string().required(),
  })
  .required("Township is required"),});

type PropsType = {
  isUpdateModalOpen: boolean;
  toggle: () => void;
  editData: Volunteer | null;
  refetch: () => void;

};

export const AdminUpdate: React.FC<PropsType> = ({
  isUpdateModalOpen,
  toggle,
  editData,
  refetch,
}) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    if (editData) {
      reset({
        name: editData?.name,
        email: editData?.email,
        township: {value: editData?.township, label: editData?.township},
      });
    }
  }, [editData, reset]);

  const submit: SubmitHandler<Omit<FormData, "password">> = useCallback(
    async (values) => {
      await updateData({ id: editData?.id as number, data: {
        name: values?.name,
        email: values?.email,
        township: values?.township?.value,
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
