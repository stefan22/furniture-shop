import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ZoomInUpDiv } from "./animations/ZoomInUpDiv";
import { FadeInUpDiv } from "./animations/FadeInUpDiv";
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
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center"
    },

    "& h1, & p": {
      textAlign: "left",
      width: "fit-content",
      color: theme.palette.colors.darkblue
    },
    "& h1": {
      fontSize: theme.palette.fontSizes.xlg,
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.palette.fontSizes.lg
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.palette.fontSizes.h1
      }
    },
    "& p": {
      fontSize: theme.palette.fontSizes.reg,
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
        width: "100%",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
          padding: "0 1rem"
        }
      }
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
      "& h1": {
        fontSize: theme.palette.fontSizes.h2
      }
    }
  },

  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "center 0",
    backgroundSize: "contain",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover"
    }
  }
}));
//bigJumbo
const MainJumbo = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.category === "all" && (
        <main className={classes.mainJumbo}>
          <div className={classes.innerShade}></div>

          <Grid item xs={12} sm={12} md={12} lg={5}>
            <ZoomInUpDiv>
              <CardMedia
                elevation={2}
                className={classes.cardMedia}
                image={bigLiving}
                title="Image title"></CardMedia>
            </ZoomInUpDiv>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FadeInUpDiv>
              <div className={classes.jumboHeading}>
                <h1>
                  Welcome,
                  <br /> Jumbo furniture
                </h1>
                <p>
                  Suheading ealium corinani lorem no nulla virusasem abbiamo
                  moltissimeum
                </p>
              </div>
            </FadeInUpDiv>
          </Grid>
        </main>
      )}
    </>
  );
};

export default MainJumbo;
