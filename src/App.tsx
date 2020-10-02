import { createStyles, Theme, ThemeProvider } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import ScrollTopBtn from "./components/ScrollTopBtn";
import About from "./sections/About";
import FooterSection from "./sections/Footer";
import Form from "./sections/Form";
import HeaderSection from "./sections/HeaderSection";
import { TStore } from "./typescript/storeType";
import { dMainBackgroundColor, lMainBackgroundColor, theme } from "./config/palette";

const mapStateToProps = (state: TStore) => {
  return {
    isLight: state.theme.isLightTheme,
  };
};
const mapDispatchToProps = {
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TAppProps extends PropsFromRedux {
  isLight: boolean;
}

function App({ isLight }: TAppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      bodyComponent: {
        width: "100p",
        minHeight: 900,
        backgroundColor: isLight ? lMainBackgroundColor : dMainBackgroundColor,
      },
    })
  );

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.bodyComponent}>
        <HeaderSection />
         <About />
        <Form />
        <FooterSection />
        <ScrollTopBtn />
      </div>
    </ThemeProvider>
  );
}

export default connector(App);
