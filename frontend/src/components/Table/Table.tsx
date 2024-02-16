import React from "react";

type PropsType = {
  headers: string[];
  body: JSX.Element[] | null | undefined;
};

export const Table: React.FC<PropsType> = ({ headers, body }) => {
  return (
    <div className="min-w-full overflow-x-auto ">
      <table className="text-sm text-left text-gray-500 w-full dark:bg-primaryDark">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 w-full dark:bg-secondaryDark">
          <tr className="dark:text-white">
            {headers?.map((header, index) => (
              <th
                scope="col"
                className="px-6 py-3 whitespace-normal"
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="dark:bg-primaryDark">{body}</tbody>
      </table>
    </div>
  );
};
