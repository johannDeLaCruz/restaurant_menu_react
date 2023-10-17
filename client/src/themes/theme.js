import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsla(0, 13%, 51%, 1)",
    },
    secondary: {
      main: "hsla(38, 35%, 94%, 1)",
    },
    error: {
      main: "hsla(25, 50%, 52%, 1)",
    },
    success: {
      main: "hsla(60, 5%, 43%, 1)",
    },
  },
});

export default theme;
