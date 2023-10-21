import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#052b0e",
      contrastText: "#f5f1ea",
    },
    secondary: {
      main: "#f2b38f",
    },
    background: {
      default: "#f5f1ea",
      paper: "#f5f1ea",
    },
    warning: {
      main: "#ca6b35",
    },
  },
  shape: {
    borderRadius: 0,
  },

  typography: {
    fontFamily: ["'Philosopher', sans-serif", "'Tajawal', sans-serif"],

    // fontSize: 16,
    h1: {
      fontFamily: "Philosopher",
      fontSize: "6.81rem", // Equivalent to 109px
      fontWeight: 300,
      letterSpacing: "-1.5px",
    },
    h2: {
      fontFamily: "Philosopher",
      fontSize: "4.25rem", // Equivalent to 68px
      fontWeight: 300,
      letterSpacing: "-0.5px",
    },
    h3: {
      fontFamily: "Philosopher",
      fontSize: "3.44rem", // Equivalent to 55px
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Philosopher",
      fontSize: "2.44rem", // Equivalent to 39px
      fontWeight: "bold",
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: "Philosopher",
      fontSize: "1.69rem", // Equivalent to 27px
      fontWeight: "bold",
    },
    h6: {
      fontFamily: "Philosopher",
      fontSize: "1.44rem", // Equivalent to 23px
      fontWeight: "bold",
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontFamily: "Philosopher",
      fontSize: "1.125rem", // Equivalent to 18px
      fontWeight: 400,
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontFamily: "Philosopher",
      fontSize: "1rem", // Equivalent to 16px
      fontWeight: 500,
      letterSpacing: "0.1px",
    },
    body1: {
      fontFamily: "Tajawal",
      fontSize: "1.1875rem", // Equivalent to 19px
      fontWeight: 400,
      letterSpacing: "0.5px",
    },
    body2: {
      fontFamily: "Tajawal",
      fontSize: "1rem", // Equivalent to 16px
      fontWeight: 400,
      letterSpacing: "0.25px",
    },
    button: {
      fontFamily: "Philosopher",
      fontSize: "1rem", // Equivalent to 16px
      fontWeight: 500,
      // letterSpacing: "1.25px",
    },
    caption: {
      fontFamily: "Tajawal",
      fontSize: "0.875rem", // Equivalent to 14px
      fontWeight: 400,
      letterSpacing: "0.4px",
    },
    overline: {
      fontFamily: "Tajawal",
      fontSize: "0.75rem", // Equivalent to 12px
      fontWeight: 400,
      letterSpacing: "1.5px",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h3",
          h2: "h5",
          h3: "h1",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "p",
          subtitle2: "p",
          body1: "p",
          body2: "p",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "8rem",
          textTransform: "none",
          fontSize: "1rem",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "Tajawal",
          fontSize: "1.1875rem", // Equivalent to 19px
          fontWeight: 400,
          letterSpacing: "0.5px",
        },
        secondary: {
          fontFamily: "Tajawal",
          fontSize: "1.1875rem", // Equivalent to 19px
          fontWeight: 400,
          letterSpacing: "0.5px",
        },
      },
    },
  },
});

export default theme;
