import { paths } from "@/constants/paths";
import { App } from "@/layouts/app";
import { Dashboard } from "@/pages/dashboard";
import { Students } from "@/pages/students";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: paths.dashboard,
        element: <Dashboard />,
      },
      {
        path: `${paths.students}/:id`,
        element: <Students />,
      },
      {
        path: "",
        element: <Navigate to={paths.dashboard} replace />,
      },
    ],
  },
]);
