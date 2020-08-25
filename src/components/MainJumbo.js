import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// images
import bigLiving from "../images/livingtopoftheworld.jpeg";

const useStyles = makeStyles((theme) => ({
  mainJumbo: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "5rem 0 5rem",
    [theme.breakpoints.down("sm")]: {
      margin: "5rem 0 3rem"
    }
  },
  innerShade: {
    background: theme.palette.colors.jumbg,
    height: "275px",
    position: "absolute",
    right: 0,
    top: "5vh",
    zIndex: -1,
    marginLeft: "3rem",
    marginRight: "3rem",
    display: "flex",
    width: "calc(92%)",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  jumboHeading: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "255px",
    marginLeft: "-3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
      "& h1": {
        fontSize: theme.palette.fontSizes.h2
      }
    },
    "& h1, & p": {
      textAlign: "left",
      width: "fit-content",
      color: theme.palette.colors.darkblue
    },
    "& p": {
      color: theme.palette.primary.main,
      [theme.breakpoints.down("md")]: {
        margin: "1.25rem 0"
      }
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "center",
      "& h1, & p": {
        textAlign: "center",
        width: "100%"
      }
    }
  },

  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover"
    }
  }
}));

const MainJumbo = () => {
  const classes = useStyles();

  return (
    <main className={classes.mainJumbo}>
      <div className={classes.innerShade}></div>

      <Grid item xs={12} sm={12} md={12} lg={5}>
        <CardMedia
          elevation={2}
          className={classes.cardMedia}
          image={bigLiving}
          title="Image title"></CardMedia>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className={classes.jumboHeading}>
          <h1>
            Welcome,
            <br /> Casino furniture
          </h1>
          <p>
            Whether you're spending your days working from lorem Ipsum vamos
            hola valaumos workday at home
          </p>
        </div>
      </Grid>
    </main>
  );
};

export default MainJumbo;
