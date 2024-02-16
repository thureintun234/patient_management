import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";

interface PaginationProps {
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const query : any = queryString.parse(location.search);
  const pageChange = (i : number) => {
    query.page = i;
    navigate(`${location.pathname}?${queryString.stringify(query)}`);
  };

  const pageNumbersToShow = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex flex-row items-center sm:flex-row  bg-white px-4 py-3 sm:px-6 justify-end dark:bg-primaryDark">
      {query?.page > 1 && (
        <button
          className="relative inline-flex items-center rounded-md  bg-white p-2 text-gray-700 hover:bg-secondary dark:hover:bg-fourthDark dark:hover:text-white"
          onClick={() => pageChange(parseInt(query?.page) - 1)}
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
      )}

      <div className="flex overflow-x-auto space-x-2 mx-2">
        {pageNumbersToShow.map((page) => (
          <button
            key={page}
            className={`relative px-3 rounded-md inline-flex items-center p-2 text-sm font-semibold ${
              page === parseInt(query?.page || 1)
                ? "bg-primary text-white dark:bg-fourthDark"
                : "text-gray-900 dark:text-white"
            } hover:bg-secondary focus:z-20 focus:outline-offset-0 dark:hover:bg-fourthDark`}
            onClick={() => pageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      {
        query?.page < totalPages && <button
        className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-700 hover:bg-secondary dark:hover:bg-fourthDark dark:hover:text-white"
        onClick={() => pageChange(parseInt(query?.page) + 1)}
      >
        <ArrowRightIcon className="h-4 w-4" />
      </button>
      }
      
    </div>
  );
};
