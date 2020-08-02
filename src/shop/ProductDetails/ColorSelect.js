import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  place: {
    opacity: .4,
    fontWeight: 200,
  },

  inputLabel: {
    color: theme.palette.primary.main,
  }

}));


export default function ColorSelect(props) {
  const classes = useStyles();
  const [color, setColor] = React.useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
    props.handleDataElement(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>

      <Select

        value={color}
        onChange={handleChange}
        color="secondary"
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem className={classes.place} value="" disabled>
         Enter Colour
        </MenuItem>

        <MenuItem value={"white"}>White</MenuItem>
        <MenuItem value={"black"}>Black</MenuItem>
      </Select>
      <FormHelperText>Colour</FormHelperText>
    </FormControl>
  );
}
