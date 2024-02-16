import React from "react";
import { RouteType } from "../../types/route";

type PropsType = {
  route: RouteType;
  isSideBarClose: boolean;
};

export const MenuItem: React.FC<PropsType> = ({ route, isSideBarClose }) => {
  return (
    <li
      className="text-gray-600 dark:text-white hover:text-gray-400 flex w-full justify-between  cursor-pointer items-center mb-6"
    >
      <a href={route.layout + route.path} className="flex items-center ">
        {route.icon}
        {!isSideBarClose && <span className="  ml-2">{route?.name}</span>}
      </a>
    </li>
  );
};
