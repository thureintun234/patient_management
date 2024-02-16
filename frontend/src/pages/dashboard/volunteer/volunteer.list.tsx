import React, {  useState } from "react";
import { Table } from "../../../components/Table";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "../../../components/Button";
import { useAdmin } from "./useVolunteer";
import { AdminCreate } from "./volunteer.create";
import { AdminUpdate } from "./volunteer.update";
import { Volunteer } from "./types";
import { deleteData } from "../../../lib/services/volunteer";

export const VolunteerList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editData, setEditData] = useState<Volunteer | null>(null);
  const headers = ["No", "Name", "Password", "Email", "Township", "Actions"];


  const { data, isLoading, refetch, isValidating } = useAdmin();

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

  const handleEdit = (data: Volunteer) => {
    setIsUpdateModalOpen(true);
    setEditData(data);
  };

  if (isLoading || isValidating) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <div>
          <Button
            onClick={toggle}
            className="bg-primary text-white px-3 py-1 rounded-lg"
          >
             New
          </Button>
      </div>
      <Table
        headers={headers}
        body={data?.map((admin: Volunteer, index: number) => (
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
            <td className="px-6 py-4">{admin?.name}</td>
            <td className="px-6 py-4">{admin?.password}</td>
            <td className="px-6 py-4">{admin?.email}</td>
            <td className="px-6 py-4">{admin?.township}</td>

            <td className="px-6 py-4 flex gap-x-3">
              <PencilSquareIcon
                className="h-6 w-6 text-blue-400 cursor-pointer"
                onClick={() => handleEdit(admin)}
              />
              <TrashIcon
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={() => handleDelete(admin?.id)}
              />
            </td>
          </tr>
        ))}
      />
      {isModalOpen && (
        <AdminCreate
          isModalOpen={isModalOpen}
          toggle={toggle}
          refetch={refetch}
        />
      )}
      {isUpdateModalOpen && (
        <AdminUpdate
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
