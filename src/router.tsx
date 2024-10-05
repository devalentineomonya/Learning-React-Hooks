import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <MainLayout/>
        ),
 
        children: [
          {
            path: "docs/usestate",
            element: <h1>Hello world</h1>,
          },
          {
            path: "docs/useeffect",
            element: <h1>Heelo useEffect</h1>,
          }],
        }
])