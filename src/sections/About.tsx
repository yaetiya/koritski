import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import TeamBlock from "../components/TeamBlock";
import HeadText from "../components/HeadText";
import ProjectsBlock from "../components/ProjectsBlock";
import {
  dLightBackgroundColor,
  dTextColor,
  lLightBackgroundColor,
  lTextColor,
} from "../config/palette";
import { useSelector } from "react-redux";
import { enLang, ruLang } from "../config/text";
import { selectLang, selectTheme } from "../redux/selectors";


const About = () => {
  const isLang = useSelector(selectLang);
  const isLight = useSelector(selectTheme);
  const lang = isLang ? enLang : ruLang;
  const LightBackgroundColor = isLight
    ? lLightBackgroundColor
    : dLightBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;
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
        backgroundColor: LightBackgroundColor,
        paddingTop: 88,
        paddingBottom: 140,
      },

      "@media (max-width: 400px)": {
        gridWrapper: {
          padding: 0,
          marginTop: 0,
          width: "110%",
        },
        gw: {
          marginLeft: 0,
          marginTop: 0,

          width: "100%",
        },
      },
    })
  );

  const classes = useStyles();

  return (
    <div>
      <HeadText mainText={lang.headl.projects} lightColor={TextColor} />
      <ProjectsBlock />
      <div className={classes.RowSec}>
        <HeadText mainText={lang.headl.about} lightColor={TextColor} />
        <TeamBlock />
      </div>
    </div>
  );
};

export default About;
