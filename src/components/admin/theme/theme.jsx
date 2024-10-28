import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff0000",
    },
    background: {
      default: "#f0f0f0",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export { lightTheme, darkTheme };
