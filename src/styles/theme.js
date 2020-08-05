import { createMuiTheme } from "@material-ui/core/styles";

import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: grey[700],
    },
    type: "light",
    // other colors from vars.scss
    colors: {
      white: "#fffafa",
      snow: "fffafa",
      navigationBg: "#f5f5f5",
      whiteBg: "#f8f8ff",
      lgray: "#e0e0e0",
      black: "#484848",
      gray: "rgba(34, 34, 34, 0.55)",
      lightBlack: "#757575",
      cardTitle: "#727272",
      tableHeadingBg: "#e0e0e0",
      footerBg: "#e6e6e6",
      footerBottomLight: "#E5E5E5",
      cardPrice: "#f44336",
      redreg: "#d25151",
      categoryHoverColor: "#fff4d5",
      shopHeading: "#8c7c6e",
    },
  },
});

export default theme;
