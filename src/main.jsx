import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkMoreProvider } from "./Context/DarkMoreProvider.jsx";
import { Banner } from "./Component/Banner.jsx";
import { JobCategories } from "./Component/JobCategories.jsx";
import { Home } from "./Pages/Home.jsx";
import { JobDetailsProvider } from "./Context/JobDetailsProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
      },
      // {
      //   path: "/",
      //   element: <JobCategories></JobCategories>,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkMoreProvider>
      <JobDetailsProvider>
        <RouterProvider router={router}></RouterProvider>
      </JobDetailsProvider>
    </DarkMoreProvider>
  </StrictMode>
);
