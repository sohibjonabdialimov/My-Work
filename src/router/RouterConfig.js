import React from "react";
import DesktopLayout from "../layout/DesktopLayout";

const HomePage = React.lazy(() => import("../views/home/HomePage"));

export const RoutesConfig = [{
  title: "",
  path: "/",
  Layout: DesktopLayout,
  roles: [],
  subOptions: [],
  Component: HomePage,
}];