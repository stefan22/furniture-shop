import { createMuiTheme } from "@material-ui/core";
import vars from "../styles/vars.scss";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: vars.pri
    },
    secondary: {
      main: vars.sec
    },
    error: {
      main: vars.pri
    },

    // other colors
    colors: {
      pribg: vars.pribg,
      black: vars.black,
      white: vars.white,
      snow: vars.snow,
      lightblack: vars.lightblack,
      footerBg: vars.footerBg,
      navigationBg: vars.navigationBg,
      tableHeadingBg: vars.tableHeadingBg,
      borderBottomLight: vars.borderBottomLight
    }
  },

  overrides: {
    MuiButton: {
      text: {
        paddingLeft: "14px",
        paddingRight: "14px"
      },
      root: {
        fontWeight: "500"
      }
    },
    MuiFab: {
      root: {
        fontWeight: "500"
      }
    }
  },
  typography
});

console.log(theme);

export default theme;
