import { Disclosure } from "@headlessui/react";
import React from "react";
import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { RoutesType } from "../../types/route";
import { routes } from "../../routes/routes";
import { CollapsedMenuItem } from "./CollapsedMenuItem";
import { MenuItem } from "./MenuItem";
import Logo from './../../assets/logo.png';

export const Sidebar: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-secondary h-full overflow-y-scroll dark:bg-secondaryDark dark:text-white">
      <div className="flex justify-end pt-5">{children}</div>
      <Disclosure as="div" className="h-full w-full transition-all delay-50">
        {({ open: isSideBarClose }) => (
          <>
            <Disclosure.Button
              as="div"
              className="justify-end items-center px-3 hidden md:flex"
            >
              {!isSideBarClose ? (
                <Bars3BottomRightIcon className={`h-8 w-8`} />
              ) : (
                <Bars3Icon className={`h-8 w-8`} />
              )}
            </Disclosure.Button>
            <div className="py-5 px-12 w-full flex items-center justify-center">
              {!isSideBarClose ? (
                <span></span>
              ) : (
                <span className="w-10 break-words">Logo</span>
              )}
            </div>
            <ul className="text-lg mt-3 px-12">
              {routes?.map((route: RoutesType, index: number) => {
                if (!route.showInMenu) {
                  return null;
                }
                return route?.collapse ? (
                  <CollapsedMenuItem
                    route={route}
                    isSideBarClose={isSideBarClose}
                    key={index}
                  />
                ) : (
                  <MenuItem route={route} isSideBarClose={isSideBarClose} key={index}/>
                );
              })}
            </ul>
          </>
        )}
      </Disclosure>
    </div>
  );
};
