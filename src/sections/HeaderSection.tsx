import {
  Button,
  Container,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { animateScroll } from "react-scroll";
import {
  orangeColor,
  lOutShadow,
  dOutShadow,
  // lLightBackgroundColor,
  // dLightBackgroundColor,
  lMainBackgroundColor,
  dMainBackgroundColor,
  lTextColor,
  dTextColor,
  // lSecondaryTextColor,
  // dSecondaryTextColor,
  lNavSmallBtnShadow,
  dNavSmallBtnShadow,
} from "../config/palette";
import { connect, ConnectedProps } from "react-redux";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { changeLang, changeTheme } from "../redux/actions";
import FacebookIcon from "@material-ui/icons/Facebook";
import { TStore } from "../typescript/storeType";
import { enLang, ruLang } from "../config/text";

const mapStateToProps = (state: TStore) => {
  return {
    isLight: state.theme.isLightTheme,
    isLang: state.lang.lang
  };
};
const mapDispatchToProps = {
  changeTheme,
  changeLang,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface THeaderProps extends PropsFromRedux {
  isLight: boolean;
  changeTheme: any;
  changeLang: any;
  isLang: boolean;
}

const HeaderSection = ({ isLight, isLang, changeTheme, changeLang }: THeaderProps) => {
  const lang = isLang ? enLang : ruLang
  const MainBackgroundColor = isLight
    ? lMainBackgroundColor
    : dMainBackgroundColor;
  // const LightBackgroundColor = isLight
  //   ? lLightBackgroundColor
  //   : dLightBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;
  // const SecondaryTextColor = isLight
  //   ? lSecondaryTextColor
  //   : dSecondaryTextColor;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      nav: {
        paddingTop: 25,
        display: "flex",
        justifyContent: "space-between",
      },
      logo_wrapper: {
        alignItems: "center",
        display: "flex",
      },
      logo_h: {
        paddingLeft: 14,
        fontSize: 36,
        color: TextColor,
      },
      navbar_btn: {
        backgroundColor: MainBackgroundColor,
        color: orangeColor,
        height: 40,
        width: 160,
        fontWeight: "bold",
        fontSize: 24,
        border: "2px solid " + orangeColor,
        borderRadius: 8,
      },
      logo: {
        paddingTop: 4,
        height: 36,
        width: 36,
      },

      cardWrapper: {
        // height: 190,
        // minWidth: 630,
        borderRadius: 20,
        // box-shadow: -80px -30px 124px 0px rgba(0,0,0,0.75);
        // boxShadow: "-10px -10px 40px #FFFFFF, 10px 10px 40px #C5C5C5",
        // transition: "1s",
        backgroundColor: MainBackgroundColor,
        position: "absolute",
        left: "50%",
        top: "50%",
        transitionProperty: "box-shadow, transform",
        transitionDuration: "1.5s",
        boxShadow: isLight ? lOutShadow : dOutShadow,
        transform: "scale(1,1) translate(-50%, -50%)",

        // transform: "translate(-50%, -50%)",
        "&:hover": {
          transform: "scale(0.99,0.99)  translate(-50%, -50%)",
          boxShadow: "none",
        },
      },
      cardLogo: {
        height: 72,
        marginTop: 5,
        width: 72,
      },
      cardContentWrapper: {
        marginLeft: 74,
        marginTop: 60,
        display: "flex",
      },
      cardTextWrapper: {
        marginLeft: 10,
        padding: 0,
      },
      card_h: {
        fontSize: 46,
        color: TextColor,
        lineHeight: 1,
      },
      card_hm: {
        fontSize: 24,
        color: TextColor,
        marginBottom: 48,
      },
      cardTopText: {
        display: "flex",
        marginRight: 74,
      },
      card_h5: {
        fontSize: 24,
        color: MainBackgroundColor,
        lineHeight: 2,
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 6,
        height: 38,
        borderRadius: 8,
        marginLeft: 11,
        backgroundColor: TextColor,
      },
      langBtn: {
        backgroundColor: MainBackgroundColor,
        color: TextColor,
        height: 64,
        boxShadow: isLight ? lNavSmallBtnShadow : dNavSmallBtnShadow,
        width: 64,
        fontSize: 14,
        borderRadius: 11,
        marginTop: 20,
        marginBottom: 20,
      },
      colorChangerBtn: {
        backgroundColor: orangeColor,
        "&:hover": {
          color: MainBackgroundColor,
          backgroundColor: orangeColor,
        },
      },
      langWrapper: {
        width: 50,
        position: "absolute",
        left: 66,
        top: "50%",
        transform: "translate(0%, -50%)",
      },
      socialWrapper: {
        width: 50,
        position: "absolute",
        right: 66,
        top: "50%",
        transform: "translate(0%, -50%)",
      },
      langActive: {
        color: MainBackgroundColor,
        backgroundColor: orangeColor,
        "&:hover": {
          color: MainBackgroundColor,
          backgroundColor: orangeColor,
        },
      },
      head: {
        minHeight: 600,
      },
      "@media (max-width: 1300px)": {
        cardTopText: {
          display: "block",
        },
        cardContentWrapper: {
          display: "block",
        },
        head: {
          minHeight: 900,
        },

        card_h5: {
          // display: "none",
          marginLeft: 0,
        },
        cardLogo: {
          display: "none",
        },
      },
      socialBtn: {
        color: orangeColor,
        height: 40,
        width: 40,
      },
      themeChange: {
        color: MainBackgroundColor,
        height: 40,
        width: 40,
      },
      "@media (max-width: 750px)": {
        cardTopText: {
          display: "block",
        },
        cardContentWrapper: {
          display: "block",
        },
        nav: {
          display: "block",
        },
        card_h5: {
          display: "none",
        },
        cardLogo: {
          display: "none",
        },
        cardWrapper: {
          marginTop: 100,
          position: "relative",
          width: "100%",
        },
        langWrapper: {
          // position: "absolute",
          // left: "50%",
          // top: "50%",
          transform: "translate(0%, 0%)",
          position: "relative",
          marginTop: 40,
          paddingLeft: 0,
          left: 0,
          display: "flex",
        },
        socialWrapper: {
          // position: "absolute",
          // left: "50%",
          // top: "50%",
          transform: "translate(0%, 0%)",
          position: "relative",
          marginTop: 40,
          paddingLeft: 0,
          left: 0,
          display: "flex",
        },
        langBtn: {
          marginLeft: 20,
          marginBottom: 0,
        },
        head: {
          minHeight: 400,
        },
      },
      "@media (max-width: 400px)": {
        cardWrapper: {
          marginTop: 100,
          position: "relative",
          width: "100%",
        },
        cardContentWrapper: {
          marginLeft: 0,
        },
        langBtn: {
          height: 30,
        },
        card_h: {
          paddingTop: 20,
        },
        card_hm: {
          paddingBottom: 20,
        },
      },
    })
  );
  const classes = useStyles();
  let scroll = animateScroll;

  const changeLangHandlerToRu = (event: any) => {
    event.persist();
    console.log(event);
    if (isLang){
      changeLang(false)
    }
  };
  const changeLangHandlerToEn = (event: any) => {
    event.persist();
    console.log(event);
    if (!isLang){
      changeLang(true)
    }
  };
  const changeThemeHandler = () => {
    console.log(isLight);
    changeTheme(!isLight);
  };

  return (
    <>
      <header className={classes.head}>
        <Container maxWidth="lg">
          <div className={classes.nav}>
            <div className={classes.logo_wrapper}>
              <img src="logo.png" className={classes.logo} alt="logo"></img>
              <Typography className={classes.logo_h}>KORITSKI</Typography>
            </div>
            <Button
              className={classes.navbar_btn}
              onClick={() => {
                scroll.scrollToBottom();
              }}
            >
              {lang.header.orderBtn}
            </Button>
          </div>
        </Container>
        <div className={classes.langWrapper}>
          <Button
            className={!isLang ? (classes.langBtn + " " + classes.langActive) : (classes.langBtn)}
            id="ru"
            onClick={changeLangHandlerToRu}
          >
            Ru
          </Button>
          <Button
            className={isLang ? (classes.langBtn + " " + classes.langActive) : (classes.langBtn)}
            onClick={changeLangHandlerToEn}
            id="en"
            name="ru"
          >
            En
          </Button>
        </div>
        <div className={classes.socialWrapper}>
          <Button className={classes.langBtn}>
            <FacebookIcon className={classes.socialBtn} />
          </Button>
          <Button className={classes.langBtn}>
            <InstagramIcon className={classes.socialBtn} />
          </Button>
          <Button
            className={classes.langBtn + " " + classes.colorChangerBtn}
            onClick={changeThemeHandler}
          >
            <EmojiObjectsIcon className={classes.themeChange} />
          </Button>
        </div>
        <div className={classes.cardWrapper}>
          <div className={classes.cardContentWrapper}>
            <img src="logo.png" className={classes.cardLogo} alt="logo"></img>
            <div className={classes.cardTextWrapper}>
              <div className={classes.cardTopText}>
                <Typography className={classes.card_h}>KORITSKI</Typography>
                <Typography className={classes.card_h5}>WEB STUDIO</Typography>
              </div>
              <div>
                <Typography className={classes.card_hm}>
                  {lang.header.slog}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default connector(HeaderSection);
