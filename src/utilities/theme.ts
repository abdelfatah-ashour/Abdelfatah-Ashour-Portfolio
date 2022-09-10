import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const themeMui = createTheme({
  palette: {
    primary: {
      main: "#FF2B51",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "'Roboto Mono', monospace",
  },
});
