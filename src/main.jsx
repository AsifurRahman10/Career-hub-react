import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkMoreProvider } from "./Context/DarkMoreProvider.jsx";
import { Home } from "./Pages/Home.jsx";
import { JobDetailsProvider } from "./Context/JobDetailsProvider.jsx";
import { JobDetails } from "./Pages/JobDetails.jsx";

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
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
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
