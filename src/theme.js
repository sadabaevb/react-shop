import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: "Satoshi, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
