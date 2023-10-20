import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./themes/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      {/* <RouterProvider router={router} /> */}
    </ThemeProvider>
  </React.StrictMode>
);
