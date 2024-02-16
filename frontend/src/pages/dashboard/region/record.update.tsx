import React, { useCallback, useEffect } from "react";
import { Modal } from "../../../components/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Record, FormData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/Button";
import { InputForm } from "./inputForm";
import { schema } from "./schema";
import { updateData } from "../../../lib/services/record";

type PropsType = {
  isUpdateModalOpen: boolean;
  toggle: () => void;
  editData: Record | null;
  refetch: () => void;
};

export const RecordUpdate: React.FC<PropsType> = ({
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
      });
    }
  }, [editData, reset]);

  const submit: SubmitHandler<FormData> = useCallback(
    async (values) => {
      await updateData({
        id: editData?.id as number,
        data: {
          name: values?.name,
        },
      });
      reset();
      toggle();
      refetch();
    },
    [editData?.id, refetch, reset, toggle]
  );

  return (
    <Modal title="Update Region" open={isUpdateModalOpen} onClose={toggle}>
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
