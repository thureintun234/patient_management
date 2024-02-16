import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { AdminLayout } from "../layouts";
import { routes } from "./routes";
import { getCache } from "../utils/cache";

function PrivateRoute() {
  const TOKEN = getCache("token");

  const getRoutes = (routes: any): React.ReactNode =>
    routes?.map((prop: any, index: number) => {
      if (prop.collapse) {
        return getRoutes(prop.collapse);
      }

      return (
        <Route
          path={prop.layout + prop.path}
          element={prop.component}
          key={index}
        />
      );
    });

  return TOKEN ? (
    <AdminLayout>
      <Routes>{getRoutes(routes)}</Routes>
    </AdminLayout>
  ) : (
    <Navigate to="/auth/login" replace />
  );
}
export default PrivateRoute;
