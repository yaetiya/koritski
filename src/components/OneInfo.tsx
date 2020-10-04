import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import ShareIcon from "@material-ui/icons/Share";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  createStyles,
  IconButton,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { dLightBackgroundColor, orangeColor } from "../config/palette";

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

      root: {
        justifyContent: "space-between",

        // color: TextColor,
        backgroundColor: darkColor,
        display: "flex",
      },
      media: {
        // width: "26%",
        width: 240,
        margin: 16,
        borderRadius: 6,
        height: 200,
        // paddingTop: "56.25%", // 16:9
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
          // color: TextColor,
          // backgroundColor: darkColor,
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
    // <div className={classes.oneInfoWrapper}>
    //   <div className={classes.oneInfoContentWrapper}>
    //     <Typography variant="h5" className={classes.oneInfotext}>
    //       {subj1}
    //     </Typography>
    //     <Typography variant="h5" className={classes.oneInfotext}>
    //       {subj2}
    //     </Typography>
    //     <Typography variant="body2" className={classes.oneInfotextLow}>
    //       {tec}
    //     </Typography>
    //     <Typography variant="body2" className={classes.oneInfotextLowRight}>
    //       {name}
    //     </Typography>
    //   </div>
    // </div>
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
      <CardMedia className={classes.media} image={img} title="Paella dish" />
    </Card>
  );
}
