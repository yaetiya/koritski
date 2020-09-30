import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { orangeColor } from "../config/palette";
import { Button, createStyles, Theme } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { animateScroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ScrollTopBtnWrapper: {
      position: "fixed",
      right: 40,
      bottom: 40,
      border: "2px solid " + orangeColor,
      borderRadius: 10,
    },
    ScrollTopBtn: {
      color: orangeColor,
      height: 34,
      width: 34,
      transform: "scale(1.4, 1.3)",
    },
    "@media (max-width: 400px)": {
      ScrollTopBtnWrapper: {
        // transform: "scale(1, 1.5)",
        right: 25,
        bottom: 25,
      },
    },
  })
);

export default function ScrollTopBtn() {
  const classes = useStyles();
  let scroll = animateScroll;

  return (
    <Button
      className={classes.ScrollTopBtnWrapper}
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <ExpandLessIcon className={classes.ScrollTopBtn} />
    </Button>
  );
}
