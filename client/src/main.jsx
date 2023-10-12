import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/:category", element: <App /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
