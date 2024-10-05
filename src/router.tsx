import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import React from "react";
import Home from "./pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "docs/usestate",
        element: <h1>Hello world</h1>,
      },
      {
        path: "docs/useeffect",
        element: <h1>Heelo useEffect</h1>,
      },
    ],
  },
]);
