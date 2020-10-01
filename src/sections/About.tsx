import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import TeamBlock from "../components/TeamBlock";
import HeadText from "../components/HeadText";
import ProjectsBlock from "../components/ProjectsBlock";
import {
  // dLightBackgroundColor,
  // dMainBackgroundColor,
  // dSecondaryTextColor,
  dTextColor,
  // lLightBackgroundColor,
  // lMainBackgroundColor,
  // lSecondaryTextColor,
  lTextColor,
  orangeColor,
} from "../config/palette";
import { connect, ConnectedProps } from "react-redux";
import { TStore } from "../typescript/storeType";
import { enLang, ruLang } from "../config/text";

const mapStateToProps = (state: TStore) => {
  return {
    isLight: state.theme.isLightTheme,
    isLang: state.lang.lang
  };
};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TAboutProps extends PropsFromRedux {
  isLight: boolean;
  isLang:  boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    BCenter: {
      justifyContent: "center",
      alignItems: "center",
    },
    gridWrapper: {
      marginTop: 70,
    },
    gw: {},
    RowSec: {
      paddingTop: 88,
      paddingBottom: 140,
      marginTop: 100,
      marginRight: 200,
      // backgroundImage: "url(backR.png)",
      // backgroundRepeat: "no-repeat",
      backgroundColor: orangeColor,
      position: "relative",
      "&:before": {
        position: "absolute",
        bottom: -100,
        right: -200,
        content: '""',
        width: 200,
        height: 100,
        backgroundColor: orangeColor,
      },
      "&:after": {
        position: "absolute",
        top: -50,
        left: 0,
        content: '""',
        width: 800,
        height: 50,
        backgroundColor: orangeColor,
      },
    },
    "@media (max-width: 1064px)": {
      RowSec: {
        width: "100%",
        "&:before": {
          display: "none",
        },
        "&:after": {
          display: "none",
        },
      },
    },
    "@media (max-width: 400px)": {
      gridWrapper: {
        padding: 0,
        width: "110%",
        // margin: 0,
      },
      gw: {
        marginLeft: 0,
        width: "100%",
      },
    },
  })
);

const About = ({ isLight, isLang }: TAboutProps) => {
  const lang = isLang ? enLang: ruLang;
  //   const MainBackgroundColor = isLight
  //   ? lMainBackgroundColor
  //   : dMainBackgroundColor;
  // const LightBackgroundColor = isLight
  //   ? lLightBackgroundColor
  //   : dLightBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;
  // const SecondaryTextColor = isLight
  //   ? lSecondaryTextColor
  //   : dSecondaryTextColor;

  const classes = useStyles();

  return (
    <div>
      <HeadText mainText={lang.headl.projects} lightColor={TextColor} />
      <ProjectsBlock />
      <HeadText mainText={lang.headl.about} lightColor={TextColor} />
      <div className={classes.RowSec}>
        <TeamBlock />
      </div>
    </div>
  );
};

export default connector(About);
