import React, { useState } from "react";
import { Table } from "../../../components/Table";
import {
  DocumentMagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  ForwardIcon
} from "@heroicons/react/24/solid";

import { Button } from "../../../components/Button";
import { useRecord } from "./useRecord";
import { RecordCreate } from "./record.create";
import { RecordUpdate } from "./record.update";
import { Record } from "./types";
import { deleteData,sendMessage } from "../../../lib/services/record";
import { useNavigate } from "react-router";

export const RecordList: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editData, setEditData] = useState<Record | null>(null);
  const headers = ["No", "Name", "Actions"];

  const { data, isLoading: loading, refetch, isValidating } = useRecord();

  const toggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const toggleUpdateModal = async () => {
    setIsUpdateModalOpen((prev) => !prev);
  };

  const handleDelete = async (id: number) => {
    await deleteData({ id });
    refetch();
  };

  const handleSendMessage = async (id: number) => {
    await sendMessage({ id });
  };

  const handleEdit = (data: Record) => {
    setIsUpdateModalOpen(true);
    setEditData(data);
  };

  const navigateToRecordDetails = (record_id : number) => {
    navigate(`/records/${record_id}/record-details`)
  }

  if (loading || isValidating) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col gap-y-3 w-full">
      <div>
        <Button
          onClick={toggle}
          className="bg-primary text-white px-3 py-1 rounded-lg"
        >
          Add New
        </Button>
      </div>
      <Table
        headers={headers}
        body={data?.map((record: Record, index: number) => (
          <tr
            className="bg-white border-b dark:bg-primaryDark dark:text-white"
            key={index}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>
            <td className="px-6 py-4">{record?.name}</td>

            <td className="px-6 py-4 flex gap-x-3">
            
             
              <PencilSquareIcon
                className="h-6 w-6 text-blue-400 cursor-pointer"
                onClick={() => handleEdit(record)}
              />
              <TrashIcon
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={() => handleDelete(record?.id)}
              />
            </td>
          </tr>
        ))}
      />

      {isModalOpen && (
        <RecordCreate
          isModalOpen={isModalOpen}
          toggle={toggle}
          refetch={refetch}
        />
      )}
      {isUpdateModalOpen && (
        <RecordUpdate
          isUpdateModalOpen={isUpdateModalOpen}
          toggle={() => {
            toggleUpdateModal();
          }}
          refetch={refetch}
          editData={editData}
        />
      )}
    </div>
  );
};
