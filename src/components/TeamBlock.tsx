import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { dLightBackgroundColor, dMainBackgroundColor, dSecondaryTextColor, dTextColor, lLightBackgroundColor, lMainBackgroundColor, lSecondaryTextColor, lTextColor, orangeColor } from "../config/palette";
import {
  Button,
  Container,
  createStyles,
  Grid,
  MobileStepper,
  Paper,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import OneInfo from "./OneInfo";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import { TStore } from "../typescript/langState";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const mapStateToProps = (state: TStore) => {
  return {
    isLight: state.theme.isLightTheme,
  };
};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TTeacmBlockProps extends PropsFromRedux {
  isLight: boolean;
}

const tutorialSteps = [
  {
    label: "React Flutter software developer",
    h1: "Front end",
    h2: "MOBILE DEVELOPER",
    name: "lll_web"
  },
  {
    label: "React Flutter software developer",
    h1: "Back end",
    h2: "MOBILE DEVELOPER",
    name: "asdksda sdasd"
  },{
    label: "React Flutter software developer",
    h1: "Front end",
    h2: "MOBILE DEVELOPER",
    name: "lll_web"
  },{
    label: "React Flutter software developer",
    h1: "Front end",
    h2: "Mobile Developer",
    name: "lll_web"
  },
];


const TeamBlock = ({isLight}:TTeacmBlockProps) => {
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
  teamBlockWrapper: {
    backgroundColor: orangeColor,
    // boxShadow: "-10px -10px 40px #FF825B, 10px 10px 40px #A63D1D",
    borderRadius: 20,
    width: "60%",
    marginLeft: "10%",
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
  },
  bottomBord: {
    backgroundColor: MainBackgroundColor,
    borderRadius: 23,
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
  const maxSteps = tutorialSteps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="lg">
      <div className={classes.teamBlockWrapper}>
        {/* <Grid
          container
          spacing={10}
          className={classes.teamBlockContentWrapper}
        >
          <Grid item xs>
            <OneInfo
              subj1="Web"
              subj2="Mobile"
              tec="Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati"
              name="Hellow 23"
            />
          </Grid>
          <Grid item xs>
            <OneInfo
              subj1="Back end"
              subj2="Developer"
              tec="Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati"
              name="Hellow me"
            />
          </Grid>
        </Grid> */}
        <div className={classes.teamBlockContentWrapper}>
          <OneInfo
            subj1={tutorialSteps[activeStep].h2}
            subj2={tutorialSteps[activeStep].h1}
            tec={tutorialSteps[activeStep].label}
            name={tutorialSteps[activeStep].name}
            darkColor={MainBackgroundColor}
          />
          <MobileStepper
            className={classes.bottomBord}
            variant="progress"
            steps={4}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                className={classes.elBTN}
                onClick={handleNext}
                disabled={activeStep === 3}
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
}
export default  connector(TeamBlock);