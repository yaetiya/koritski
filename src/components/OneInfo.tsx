import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { orangeColor } from "../config/palette";

type TOneInfo = {
  subj1: String;
  subj2: String;
  tec: String;
  name: String;
  darkColor: string;
  TextColor: string;
  secondaryTextColor: string;
  img: string;
  instaLink: string;
};

export default function OneInfo({
  subj1,
  subj2,
  tec,
  name,
  darkColor,
  img,
  TextColor,
  secondaryTextColor,
  instaLink,
}: TOneInfo) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      oneInfoWrapper: {
        borderRadius: 13,
        backgroundColor: orangeColor,
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

      root: {
        justifyContent: "space-between",
        backgroundColor: darkColor,
        display: "flex",
      },
      media: {
        width: 240,
        margin: 16,
        borderRadius: 6,
        height: 200,
      },
      cardText: {
        width: "100%",
        color: TextColor,
      },
      cardWrapper: {
        color: TextColor,
      },

      socialBtn: {
        borderTop: "2px solid " + orangeColor,
        height: 40,
        width: 40,
        color: orangeColor,
        borderRadius: 0,
      },
      secondaryText: {
        color: secondaryTextColor,
      },
      headlineWrapper: {
        justifyContent: "space-between",
        display: "flex",
      },
      "@media (max-width: 600px)": {
        root: {
          textAlign: "center",
          display: "block",
        },
        cardText: {
          width: "auto",
        },
        media: {
          display: "none",
          width: "100%",
        },
        headlineWrapper: {
          justifyContent: "center",
          display: "block ",
        },
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
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.cardText}>
        <div className={classes.headlineWrapper}>
          <Typography gutterBottom variant="h4" component="h2">
            {name}
          </Typography>
          <Button
            target="_blanck"
            href={"mailto:"+instaLink}
            className={classes.socialBtn}
            aria-label="settings"
          >
            <MailOutlineIcon />
          </Button>
        </div>
        <Typography
          className={classes.secondaryText}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {subj1}
        </Typography>
        <Typography
          className={classes.secondaryText}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {subj2}
        </Typography>
        <Typography
          className={classes.secondaryText}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {tec}
        </Typography>
      </CardContent>
      <CardMedia className={classes.media} image={img} title="Team" />
    </Card>
  );
}
