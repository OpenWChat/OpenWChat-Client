/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

const LoginPage = React.lazy(() => import("../Pages/login"));

export const ROUTES = {
  auth: {
    login: "/",
    otp: "/otp",
  },
};

export const router = createBrowserRouter([
  {
    path: ROUTES.auth.login,
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
]);
