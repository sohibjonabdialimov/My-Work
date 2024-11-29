import React from "react";
import DesktopLayout from "../layout/DesktopLayout";
import AuthLayout from "../layout/AuthLayout";
import Select from "../views/auth/Select";

const LoginPage = React.lazy(() => import("../views/auth/LoginPage"));
const RegisterPage = React.lazy(() => import("../views/auth/RegisterPage"));
const EmailCode = React.lazy(() => import("../views/auth/EmailCode"));
const HomePage = React.lazy(() => import("../views/home/HomePage"));

export const RoutesConfig = [{
    title: "",
    path: "/",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: HomePage,
  },
  {
    title: "login",
    path: "/login",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: LoginPage,
  },
  {
    title: "register",
    path: "/register",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: RegisterPage,
  },
  {
    title: "register",
    path: "/verify-code",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: EmailCode,
  },
  {
    title: "login",
    path: "/login",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: LoginPage,
  },
  {
    title: "select",
    path: "/select",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: Select,
  },
];