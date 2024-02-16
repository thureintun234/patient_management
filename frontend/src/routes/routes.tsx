import LoginForm from "../pages/auth";
import AdminList from "../pages/dashboard/admin";
import { Home } from "../pages/dashboard/home";
import PatientList from "../pages/dashboard/patients";
import { VolunteerList } from "../pages/dashboard/volunteer/volunteer.list";

import { RoutesType } from "../types/route";
import {
  ArchiveBoxIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const routes: RoutesType[] = [
  {
    name: "Dashboard",
    icon: <HomeIcon className="h-6 w-6 " />,
    layout: "/",
    path: "",
    showInMenu: true,
    component: <Home />,
  },
  {
    name: "Login",
    icon: <HomeIcon className="h-6 w-6 " />,
    layout: "/auth/",
    showInMenu: false,
    path: "login",
    component: <LoginForm />,
  },
  {
    name: "Admin",
    icon: <UserGroupIcon className="h-6 w-6 " />,
    layout: "/",
    showInMenu: true,
    path: "admins",
    component: <AdminList />,
  },

  {
    name: "Volunteer",
    icon: <ArchiveBoxIcon className="h-6 w-6 " />,
    layout: "/",
    showInMenu: true,
    path: "volunteers",
    component: <VolunteerList />,
  },

  {
    name: "Patient",
    icon: <ArchiveBoxIcon className="h-6 w-6 " />,
    layout: "/",
    showInMenu: true,
    path: "patients",
    component: <PatientList />,
  },
];
