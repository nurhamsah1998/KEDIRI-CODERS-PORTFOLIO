import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Index from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Community from "./Pages/Community/Community";

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
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/community",
      element: <Community />,
    },
  ]);
}
