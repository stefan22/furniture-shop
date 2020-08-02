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
  },


});


export default theme;




