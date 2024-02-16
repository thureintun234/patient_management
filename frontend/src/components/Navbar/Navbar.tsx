import { Disclosure, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useMemo } from "react";
import { ThemeSwitch } from "../ThemeSwitch";
import { getCache } from "../../utils/cache";
import { signOut } from "./useLogout";
// import useLogout from "./useLogout";

export const Navbar: React.FC = () => {
  const user = useMemo(() => {
    const cachedUser = getCache("user");
    return cachedUser ? JSON.parse(cachedUser) : {};
  }, []);

  //const { logout } = useLogout();

  return (
    <nav className="bg-primary text-white py-4 flex items-center justify-end px-8 dark:bg-primaryDark">
      {/* <ThemeSwitch /> */}
      <Disclosure as="div" className="relative ml-3">
        {({ open }) => (
          <>
            <Disclosure.Button as="div">
              <div className="flex items-center gap-x-1 cursor-pointer">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  {/* <img
                    className="h-8 w-8 rounded-full"
                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                    alt=""
                  /> */}
                  <UserCircleIcon className="h-8 w-8 text-secondary" />
                </button>
                <span>{user?.name}</span>
              </div>
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel static>
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary"
                    role="menuitem"
                    id="user-menu-item-2"
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onClick={signOut}
                  >
                    Log out
                  </span>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </nav>
  );
};
