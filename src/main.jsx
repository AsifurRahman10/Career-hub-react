import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkMoreProvider } from "./Context/DarkMoreProvider.jsx";
import { Banner } from "./Component/Banner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkMoreProvider>
      <RouterProvider router={router}></RouterProvider>
    </DarkMoreProvider>
  </StrictMode>
);
