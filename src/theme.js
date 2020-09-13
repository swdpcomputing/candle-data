import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#51d652",
    },

    secondary: {
      main: "#f40703",
    },
  },

  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    fontSize: 14,
  },

  
});

export default theme;