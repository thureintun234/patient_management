import React from "react";
import { Table } from "../../../components/Table";
import { useAdmin } from "./usePatient";
import { Patient } from "./types";

export const PatientList: React.FC = () => {
  const headers = ["No", "Name", "Age", "Gender", "Volunteer", "is_VOT", "Address"];


  const { data, isLoading, isValidating } = useAdmin();


  if (isLoading || isValidating) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col gap-y-3 w-full">

      <Table
        headers={headers}
        body={data?.map((admin: Patient, index: number) => (
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
            <td className="px-6 py-4">{admin?.age}</td>
            <td className="px-6 py-4">{admin?.sex}</td>
            <td className="px-6 py-4">{admin?.volunteer?.name}</td>
            <td className="px-6 py-4">{admin?.is_VOT}</td>
            <td className="px-6 py-4">{admin?.address}</td>
          </tr>
        ))}
      />

    </div>
  );
};
