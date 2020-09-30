import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme, Typography } from "@material-ui/core";

type TProject = {
  subj: String;
  mainText: String;
  MainBackgroundColor: string;
  SecondaryTextColor: string;
  TextColor: string;
  Shadow: string;
};

export default function Project({
  subj,
  mainText,
  MainBackgroundColor,
  SecondaryTextColor,
  TextColor,
  Shadow,
}: TProject) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      ProjectWrapper: {
        boxShadow:
          Shadow,
        borderRadius: 43,
        backgroundColor: MainBackgroundColor,
      },
      ProjectContentWrapper: {
        marginLeft: 38,
        marginTop: 20,
        marginRight: 80,
        marginBottom: 40,
      },
      Projecttext: {
        color: TextColor,
        fontSize: 36,
        paddingTop: 40,
        minWidth: 120,
      },
      ProjecttextLow: {
        color: SecondaryTextColor,
        paddingBottom: 40,
      },
      "@media (max-width: 400px)": {
        ProjectWrapper: {
          boxShadow: "none",
          backgroundColor: MainBackgroundColor,
        },
        ProjecttextLowRight: {
          textAlign: "left",
        },
        ProjectContentWrapper: {
          margin: 0,
        },
        Projecttext: {
          fontSize: 24,
        },
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.ProjectWrapper}>
      <div className={classes.ProjectContentWrapper}>
        <Typography variant="h5" className={classes.Projecttext}>
          {subj}
        </Typography>
        <Typography variant="body2" className={classes.ProjecttextLow}>
          {mainText}
        </Typography>
      </div>
    </div>
  );
}
