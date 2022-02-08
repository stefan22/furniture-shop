import React, { useState, useEffect } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@material-ui/icons/CheckBoxSharp";

const useStyles = makeStyles({
  initCheck: {
    color: "white",
    width: "18px",
    height: "18px",
    background: "white",
    border: "1px solid gray",
<<<<<<< HEAD
    borderRadius: "0",
=======
    borderRadius: "0"
>>>>>>> master
  },

  postCheck: {
    background: "red",
    width: "18px",
    height: "18px",
    border: 0,
    color: "white",
    padding: 0,
    outline: "1px solid white",
    boxShadow: "0 3px 5px 2px rgb(208, 208, 208)",
<<<<<<< HEAD
    borderRadius: "3px",
  },
=======
    borderRadius: "3px"
  }
>>>>>>> master
});

const initialItems = [
  {
    name: "white",
    label: "White",
    Icon: CheckBoxOutlineBlankOutlinedIcon,
<<<<<<< HEAD
    CheckedIcon: CheckBoxIcon,
=======
    CheckedIcon: CheckBoxIcon
>>>>>>> master
  },
  {
    name: "black",
    label: "Black",
    Icon: CheckBoxOutlineBlankSharpIcon,
<<<<<<< HEAD
    CheckedIcon: CheckBoxSharpIcon,
  },
];

export default function CustomizingCheckboxItems({ handleDataElement }) {
=======
    CheckedIcon: CheckBoxSharpIcon
  }
];

export default function RadioColors(props) {
>>>>>>> master
  const classes = useStyles();
  const [items, setItems] = useState({});

  useEffect(() => {
    setItems(
      initialItems.reduce(
        (state, item) => ({ ...state, [item.name]: false }),
        {}
      )
    );
  }, []);

  const onChange = (e) => {
    setItems({ [e.target.name]: e.target.checked });
    let checked = {};
    checked.color = e.target.name;
<<<<<<< HEAD
    handleDataElement(checked);
=======
    props.handleDataElement({ name: e.target.name, value: e.target.checked });
>>>>>>> master
  };

  return (
    <FormGroup>
      {initialItems.map(({ name, label, Icon, CheckedIcon }, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={items[name] || false}
              onChange={onChange}
              inputProps={{ name }}
              icon={
                <Icon
                  fontSize="small"
                  classes={{
<<<<<<< HEAD
                    root: classes.initCheck,
=======
                    root: classes.initCheck
>>>>>>> master
                  }}
                />
              }
              checkedIcon={
                <CheckedIcon
                  color="primary"
                  fontSize="small"
                  classes={{
<<<<<<< HEAD
                    root: classes.postCheck,
=======
                    root: classes.postCheck
>>>>>>> master
                  }}
                />
              }
            />
          }
          label={label}
        />
      ))}
    </FormGroup>
  );
}
