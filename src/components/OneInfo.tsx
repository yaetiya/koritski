import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { createStyles, Theme, Typography } from "@material-ui/core";
import { orangeColor } from "../config/palette";

type TOneInfo = {
  subj1: String;
  subj2: String;
  tec: String;
  name: String;
  darkColor: string;
};

export default function OneInfo({ subj1, subj2, tec, name,darkColor,  }: TOneInfo) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      oneInfoWrapper: {
        // border: "2px solid " + darkColor,
        borderRadius: 13,
        backgroundColor: orangeColor,

        //com
        paddingTop: 20,
      },
      oneInfoContentWrapper: {
        border: "4px solid " + darkColor,
        padding: 13,
        borderRadius: 13,
        marginLeft: 28,
        marginTop: 20,
        marginRight: 28,
        marginBottom: 20,
      },
      oneInfotext: {
        color: darkColor,
        fontSize: 36,
        paddingRight: 20,
        // minWidth: 220,
      },
      oneInfotextLow: {
        color: darkColor,
      },
      oneInfotextLowRight: {
        textAlign: "right",
        marginTop: 30,
        color: darkColor,
        fontSize: 24,
      },

      "@media (max-width: 400px)": {
        oneInfoWrapper: {
          border: "0px solid black",
          backgroundColor: orangeColor,
        },
        oneInfotextLowRight: {
          textAlign: "left",
        },
        oneInfoContentWrapper: {
          margin: 20,
        },
        oneInfotext: {
          fontSize: 24,
        },
      },
    })
  );

  const classes = useStyles();

  return (
    <div className={classes.oneInfoWrapper}>
      <div className={classes.oneInfoContentWrapper}>
        <Typography variant="h5" className={classes.oneInfotext}>
          {subj1}
        </Typography>
        <Typography variant="h5" className={classes.oneInfotext}>
          {subj2}
        </Typography>
        <Typography variant="body2" className={classes.oneInfotextLow}>
          {tec}
        </Typography>
        <Typography variant="body2" className={classes.oneInfotextLowRight}>
          {name}
        </Typography>
      </div>
    </div>
  );
}
