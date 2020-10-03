import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme, Typography } from "@material-ui/core";

type THeadText = {
  mainText: String;
  lightColor: string;
};

export default function HeadText({ mainText, lightColor }: THeadText) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      hLogo: {
        width: 36,
        height: 36,
      },
      hWrapper: {
        verticalAlign: "middle",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        marginTop: 90,
      },
      hText: {
        color: lightColor,
        marginLeft: 12,
        fontSize: 24,
        fontWeight: "lighter",
      },
      "@media (max-width: 750px)": {
        hWrapper: {
          marginTop: 80,
        }
      }
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.hWrapper}>
      <img src="logo.png" className={classes.hLogo} alt="logo"></img>
      <Typography component="h4" className={classes.hText}>
        {mainText}
      </Typography>
    </div>
  );
}
