import type { FC } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Disclosure } from "@headlessui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

export const AdminLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="flex w-screen h-screen overflow-x-hidden bg-third dark:bg-thirdDark">
      <aside className="h-full hidden md:block flex-none">
        <Sidebar />
      </aside>
      <div className="grow hidden md:flex md:flex-col overflow-x-hidden ">
        <Navbar />
        <div className=" flex justify-center w-full sm:p-5 p-0">{children}</div>
      </div>

      <div className="h-screen md:hidden w-screen">
        <Disclosure as="div" className="h-full">
          {({ open }) => (
            <>
              <div className="flex flex-col h-full">
                <nav className="bg-primary text-white py-4 flex items-center px-5">
                  <Disclosure.Button as="div">
                    <Bars3BottomLeftIcon className="h-8 w-8" />
                  </Disclosure.Button>
                </nav>
                <div className="bg-third flex justify-center flex-1">
                  <div className="w-full p-5">
                    {/* routes */}
                    {children}
                  </div>
                </div>
              </div>

              {open && (
                <Disclosure.Button
                  as="div"
                  className="fixed inset-0 "
                ></Disclosure.Button>
              )}

              <div
                className={`h-full ${
                  open ? "w-full sm:w-1/2" : "w-0"
                } shadow-xl bg-gray-800 transition-all delay-50 overflow-hidden absolute z-50 top-0 left-0`}
              >
                <Sidebar>
                  <Disclosure.Button as="div">
                    <Bars3BottomLeftIcon className="h-8 w-8" />
                  </Disclosure.Button>
                </Sidebar>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </main>
  );
};
