import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Index from "./Pages/Home/Home";
import About from "./Pages/About/About";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
}
