import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  // dLightBackgroundColor,
  dMainBackgroundColor,
  dSecondaryTextColor,
  // dSecondaryTextColor,
  dTextColor,
  // lLightBackgroundColor,
  lMainBackgroundColor,
  lSecondaryTextColor,
  // lSecondaryTextColor,
  lTextColor,
} from "../config/palette";
import {
  Button,
  Container,
  createStyles,
  MobileStepper,
  Theme,
  useTheme,
} from "@material-ui/core";
import OneInfo from "./OneInfo";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import { TStore } from "../typescript/storeType";
import { enSlider, ruSlider } from "../config/text";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const mapStateToProps = (state: TStore) => {
  return {
    isLight: state.theme.isLightTheme,
    isLang: state.lang.lang
  };
};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TTeacmBlockProps extends PropsFromRedux {
  isLight: boolean;
  isLang: boolean;
}

const TeamBlock = ({ isLight, isLang }: TTeacmBlockProps) => {
  const sliderContent = isLang ? enSlider : ruSlider
  const MainBackgroundColor = isLight
    ? lMainBackgroundColor
    : dMainBackgroundColor;
  // const LightBackgroundColor = isLight
  //   ? lLightBackgroundColor
  //   : dLightBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;
  const SecondaryTextColor = isLight
    ? lSecondaryTextColor
    : dSecondaryTextColor;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      teamBlockWrapper: {
        // boxShadow: "-10px -10px 40px #FF825B, 10px 10px 40px #A63D1D",
        borderRadius: 20,
        marginTop: 60,
        width: "70%",
        marginLeft: "15%",
      },
      teamBlockContentWrapper: {
        marginTop: 15,
        marginLeft: "0%",
        // marginTop: "0%",
        width: "100%",
        height: "80%",
      },
      elBTN: {
        borderRadius: 23,
        color: TextColor,
        "&:disabled":{
          color: SecondaryTextColor
        }
      },
      bottomBord: {
        backgroundColor: MainBackgroundColor,
        borderRadius: 6,
        marginTop: 20,
      },
      "@media (max-width: 600px)": {
        teamBlockWrapper: {
          marginLeft: 0,
          width: "100%",
        },
      },
    })
  );
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = sliderContent.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 
  return (
    <Container maxWidth="lg">
      <div className={classes.teamBlockWrapper}>
        <div className={classes.teamBlockContentWrapper}>
        <OneInfo
            subj1={sliderContent[activeStep].h2}
            subj2={sliderContent[activeStep].h1}
            tec={sliderContent[activeStep].label}
            name={sliderContent[activeStep].name}
            img = {sliderContent[activeStep].img}
            secondaryTextColor = {SecondaryTextColor}
            darkColor={MainBackgroundColor}
            TextColor={TextColor}
            instaLink={sliderContent[activeStep].instaLink}
          />
          <MobileStepper
            className={classes.bottomBord}
            variant="progress"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                className={classes.elBTN}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                className={classes.elBTN}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </div>
    </Container>
  );
};
export default connector(TeamBlock);
