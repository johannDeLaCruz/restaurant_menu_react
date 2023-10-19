import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#052b0e",
    },
    secondary: {
      main: "#f2b38f",
    },
    background: {
      default: "#f5f1ea",
      paper: "#f5f1ea",
    },
    error: {
      main: "#ca6b35",
    },

  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "Philosopher",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "8rem",
          textTransform: "none",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;
