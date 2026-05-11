import {
  createBrowserRouter,
} from "react-router-dom";



import Home from "../pages/Home";
import Tenders from "../pages/Tenders";
import Downloads from "../pages/Downloads";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/tenders",
        element: <Tenders />,
      },

      {
        path: "/downloads",
        element: <Downloads />,
      },

      {
        path: "/projects",
        element: <Projects />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },

]);

export default router;