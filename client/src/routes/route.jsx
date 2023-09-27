import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CoursesPage } from "../pages/CoursesPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/courses",
          element: <CoursesPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
