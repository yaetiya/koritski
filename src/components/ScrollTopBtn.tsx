import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { orangeColor } from "../config/palette";
import { Button, createStyles, Theme } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { animateScroll } from "react-scroll";

export default function ScrollTopBtn() {
  const [visiable, setVisiable] = useState(false);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      ScrollTopBtnWrapper: {
        transition: "0.5s",
        opacity: visiable ? 1 : 0,
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

  const classes = useStyles();
  let scroll = animateScroll;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let handleScroll = () => {
    if (document.body.getBoundingClientRect().top > -40) {
      setVisiable(false);
    }else{
      setVisiable(true);

    }
  };

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
