import { Container, createStyles, Theme, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { useSelector } from "react-redux";
import {
  lLightBackgroundColor,
  dLightBackgroundColor,
  lTextColor,
  dTextColor,
} from "../config/palette";
import { selectTheme } from "../redux/selectors";

const FooterSection = () => {
  const isLight = useSelector(selectTheme);
  const LightBackgroundColor = isLight
    ? lLightBackgroundColor
    : dLightBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      footer: {
        paddingTop: 25,
        textAlign: "center",
      },
      logo_wrapper: {
        textAlign: "center",
      },
      contacts: {
        color: TextColor,
      },
      link: {
        textDecoration: "none",
        color: TextColor,
      },
      logo: {
        paddingTop: 14,
        height: 36,
        paddingBottom: 15,
        width: 36,
      },

      head: {
        backgroundColor: LightBackgroundColor,
        minHeight: 180,
      },
      "@media (max-width: 600px)": {
        footer: {
          display: "block",
        },
      },
    })
  );
  const classes = useStyles();

  return (
    <>
      <footer className={classes.head}>
        <Container maxWidth="lg">
          <div className={classes.footer}>
            <div className={classes.logo_wrapper}>
              <img src="logo.png" className={classes.logo} alt="logo"></img>
              <div>
                <Typography variant="h6" className={classes.contacts}>
                  <a href="mailto:team@koritski.com" className={classes.link}>
                    team@koritski.com
                  </a>
                </Typography>
                <Typography variant="h6" className={classes.contacts}>
                  <a href="tel:+79151405353" className={classes.link}>
                    +7 (915) 140-53-53
                  </a>
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default FooterSection;
