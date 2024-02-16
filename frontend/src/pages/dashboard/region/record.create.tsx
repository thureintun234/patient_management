import React, { useCallback } from "react";
import { Modal } from "../../../components/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/Button";
import { InputForm } from "./inputForm";
import { schema } from "./schema";
import { createData } from "../../../lib/services/record";

type PropsType = {
  isModalOpen: boolean;
  toggle: () => void;
  refetch: () => void;
};

export const RecordCreate: React.FC<PropsType> = ({
  isModalOpen,
  toggle,
  refetch,
}) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { reset, handleSubmit } = methods;

  const submit: SubmitHandler<FormData> = useCallback(
    async (values) => {
      await createData({
        data: {
          name: values?.name,
        },
      });
      reset();
      toggle();
      refetch();
    },
    [refetch, reset, toggle]
  );
  return (
    <Modal title="Create Region" open={isModalOpen} onClose={toggle}>
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
