import { Container, createStyles, Theme, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  lMainBackgroundColor,
  dMainBackgroundColor,
  lLightBackgroundColor,
  dLightBackgroundColor,
  lTextColor,
  dTextColor,
  lSecondaryTextColor,
  dSecondaryTextColor,
} from "../config/palette";
import { TStore } from "../typescript/langState";

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
  const MainBackgroundColor = isLight
    ? lMainBackgroundColor
    : dMainBackgroundColor;
  const LightBackgroundColor = isLight
    ? lLightBackgroundColor
    : dLightBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;
  const SecondaryTextColor = isLight
    ? lSecondaryTextColor
    : dSecondaryTextColor;
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      footer: {
        paddingTop: 25,
        //   display: "flex",
        textAlign: "center",
        //   justifyContent: "space-between",
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
              <img src="logo.png" className={classes.logo}></img>
              <div>
                <Typography variant="h6" className={classes.contacts}>
                  koritsky@gmail.com
                </Typography>
                <Typography variant="h6" className={classes.contacts}>
                  +911 111 11 11
                </Typography>
              </div>
            </div>
            {/* <div>
              <Typography variant="h6" className={classes.contacts}>
                KORITSKI@gmail.com
              </Typography>
              <Typography variant="h6" className={classes.contacts}>
                +911 111 11 11
              </Typography>
            </div> */}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default connector(FooterSection);
