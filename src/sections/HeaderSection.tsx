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
  lMainBackgroundColor,
  dMainBackgroundColor,
  lTextColor,
  dTextColor,
} from "../config/palette";
import { useDispatch, useSelector } from "react-redux";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { changeLang, changeTheme } from "../redux/actions";
import FacebookIcon from "@material-ui/icons/Facebook";
import { enLang, ruLang } from "../config/text";
import { facebookLink, instagramLink } from "../config/links";
import { selectLang, selectTheme } from "../redux/selectors";


const HeaderSection = () => {
  const isLang = useSelector(selectLang);
  const isLight = useSelector(selectTheme);
  const dispatch = useDispatch();
  const lang = isLang ? enLang : ruLang;
  const MainBackgroundColor = isLight
    ? lMainBackgroundColor
    : dMainBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;

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
        width: 180,
        fontWeight: "bold",
        fontSize: 24,
        borderRadius: 8,
      },
      logo: {
        paddingTop: 4,
        height: 36,
        width: 36,
      },
      "@keyframes slideRight": {
        from: {
          transform: "scale(0.99,0.99)  translate(-50%, -50%)",
          boxShadow: "none",
        },
        to: {
          boxShadow: isLight ? lOutShadow : dOutShadow,
          transform: "scale(1,1) translate(-50%, -50%)",
        },
      },

      cardWrapper: {
        animationName: "$slideRight",
        animationDuration: "1s",
        animationTimingFunction: "linear",

        borderRadius: 20,

        backgroundColor: MainBackgroundColor,
        position: "absolute",
        left: "50%",
        top: "50%",
        transitionProperty: "box-shadow, transform",
        transitionDuration: "1.5s",
        boxShadow: isLight ? lOutShadow : dOutShadow,
        transform: "scale(1,1) translate(-50%, -50%)",

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
        width: 64,
        fontSize: 14,
        borderRadius: 11,
        marginTop: 20,
        marginBottom: 20,
        boxShadow: isLight ? lOutShadow : dOutShadow,
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
      "@media (max-width: 701px)": {
        logo_wrapper: {
          textAlign: "center",
        },
        navbar_btn: {
          display: "none",
        },
        card_h5: {
          width: "100%",
        },
        card_h: {
          display: "none",
        },
        card_hm: {
          textAlign: "center",
          margin: 0,
        },
        cardTopText: {
          textAlign: "center",
          margin: 0,
          width: "90%",
          marginLeft: "4%",
          display: "block",
        },
        cardTextWrapper: {
          margin: 0,
        },
        cardContentWrapper: {
          marginTop: 150,
          paddingTop: 20,
          display: "block",
        },
        nav: {
          display: "block",
        },

        cardLogo: {
          display: "none",
        },
        cardWrapper: {
          position: "relative",
          width: "100%",
        },
        langWrapper: {
          left: "50%",
          transform: "translate(-30%, -50%)",
          width: "93%",
          justifyContent: "space-between",
        },
        socialWrapper: {
          left: "50%",
          transform: "translate(-30%, -50%)",
          width: "93%",
          justifyContent: "space-between",
        },
        langBtn: {
          marginLeft: 20,
          marginBottom: 0,
        },
        head: {
          minHeight: 0,
        },
      },
      "@media (max-width: 700px)": {
        socialBtn: {
          height: 25,
          width: 25,
        },
        langWrapper: {
          transform: "translate(0%, 0%)",
          position: "relative",
          marginTop: 0,
          paddingLeft: 0,
          left: 0,
          display: "flex",
        },
        socialWrapper: {
          transform: "translate(0%, 0%)",
          position: "relative",
          marginTop: 0,
          paddingLeft: 0,
          left: 0,
          display: "flex",
        },
        cardWrapper: {
          borderRadius: 0,
          marginTop: 300,
          marginBottom: 70,
          position: "relative",
          width: "100%",
        },
        cardContentWrapper: {
          marginLeft: 0,
        },
        langBtn: {
          height: 40,
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
    if (isLang) {
      dispatch(changeLang(false));
    }
  };
  const changeLangHandlerToEn = (event: any) => {
    event.persist();
    if (!isLang) {
      dispatch(changeLang(true));
    }
  };
  const changeThemeHandler = () => {
    dispatch(changeTheme(!isLight));
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
              variant="outlined"
              color="primary"
              style={{ border: "2px solid" }}
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
            className={
              !isLang
                ? classes.langBtn + " " + classes.langActive
                : classes.langBtn
            }
            id="ru"
            onClick={changeLangHandlerToRu}
          >
            Ru
          </Button>
          <Button
            className={
              isLang
                ? classes.langBtn + " " + classes.langActive
                : classes.langBtn
            }
            onClick={changeLangHandlerToEn}
            id="en"
            name="ru"
          >
            En
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

        <div className={classes.socialWrapper}>
          <Button
            className={classes.langBtn}
            href={facebookLink}
            target="_blanck"
          >
            <FacebookIcon className={classes.socialBtn} />
          </Button>
          <Button
            className={classes.langBtn}
            href={instagramLink}
            target="_blanck"
          >
            <InstagramIcon className={classes.socialBtn} />
          </Button>
          <Button
            className={classes.langBtn}
            style={{
              backgroundColor: orangeColor,
            }}
            onClick={changeThemeHandler}
          >
            <EmojiObjectsIcon
              className={classes.socialBtn}
              style={{
                color: MainBackgroundColor,
                backgroundColor: orangeColor,
              }}
            />
          </Button>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
