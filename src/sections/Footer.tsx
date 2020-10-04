import { Container, createStyles, Theme, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  lLightBackgroundColor,
  dLightBackgroundColor,
  lTextColor,
  dTextColor,
} from "../config/palette";
import { TStore } from "../typescript/storeType";

const mapStateToProps = (state: TStore) => {
  return {
    isLight: state.theme.isLightTheme,
  };
};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TFooterProps extends PropsFromRedux {
  isLight: boolean;
}

function FooterSection({ isLight }: TFooterProps) {
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
                  team@koritski.com
                </Typography>
                <Typography variant="h6" className={classes.contacts}>
                  +7 (906) 081-39-56
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default connector(FooterSection);
