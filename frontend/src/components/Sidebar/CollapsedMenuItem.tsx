import React from "react";
import { RoutesType } from "../../types/route";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type PropsType = {
  route: RoutesType;
  isSideBarClose: boolean;
};

export const CollapsedMenuItem: React.FC<PropsType> = ({
  route,
  isSideBarClose,
}) => {
  return (
    <li
      className=" flex w-full flex-col justify-between  cursor-pointer items-center mb-6 group group-mb-5 
      text-gray-600 dark:text-white"
    >
      <Disclosure as="div" className="w-full">
        {({ open }) => (
          <>
            <Disclosure.Button
              as="div"
              className="flex items-center w-full  hover:text-gray-400"
            >
              {route?.icon}
              {!isSideBarClose && (
                <span className=" ml-2 flex-1">{route?.name}</span>
              )}

              <ChevronDownIcon
                className={`h-4 w-4 ${open ? "rotate-180" : ""}`}
              />
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                as="div"
                className={`w-full ${isSideBarClose ? "" : "pl-11"} py-2`}
              >
                <ul className="space-y-2">
                  {route?.collapse?.map((subRoute, index) => {
                    if(!subRoute.showInMenu) {
                        return;
                    }
                    return (
                      <li key={index}>
                        <a
                          href={route.layout + subRoute.path}
                          className="flex items-center  hover:text-gray-400"
                        >
                          {subRoute.icon}
                          {!isSideBarClose && (
                            <span className="  ml-2">{subRoute?.name}</span>
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  );
};
