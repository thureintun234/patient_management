import React, { Fragment } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useTheme from "../../lib/hooks/useTheme";

export const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme);
  };

  return (
    <Switch onChange={toggleDarkMode} as={Fragment}>
      {({ checked }) => (
        <button className="bg-secondary relative inline-flex h-6 w-12 items-center rounded-full justify-between px-1 dark:bg-secondaryDark" >
          {checked && <SunIcon className="text-primary w-5" />}
          <span className="sr-only">Enable notifications</span>
          <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition" />
          {!checked && <MoonIcon className="text-secondary w-5" />}
        </button>
      )}
    </Switch>
  );
};
