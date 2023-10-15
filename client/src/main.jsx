import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import ItemList from "./components/ItemList.jsx";
import CssBaseline from "@mui/material/CssBaseline";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/menu",
//     element: <App />,
//     children: [{ path: "menu/:day", element: <ItemList /> }],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
