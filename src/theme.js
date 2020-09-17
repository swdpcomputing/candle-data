import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#51d652",
    },

    secondary: {
      main: "#f40703",
    },

    error: {
      main: "#FFBF00",
    },

    grey: {
      main: "#737373",
    },
  },

  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    fontSize: 14,
  },
});

export default theme;
