import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Container, createStyles, Grid, Theme } from "@material-ui/core";
import Project from "./Project";
import { connect, ConnectedProps } from "react-redux";
import { TStore } from "../typescript/langState";
import {
  lMainBackgroundColor,
  dMainBackgroundColor,
  lLightBackgroundColor,
  dLightBackgroundColor,
  lTextColor,
  dTextColor,
  lSecondaryTextColor,
  dSecondaryTextColor,
  lInShadow,
  dInShadow,
} from "../config/palette";

const mapStateToProps = (state: TStore) => {
  return {
    isLight: state.theme.isLightTheme,
  };
};
const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TProjectsBlockProps extends PropsFromRedux {
  isLight: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    teamBlockWrapper: {
      marginTop: 40,
      width: "90%",
      marginLeft: "5%",
    },
    teamBlockContentWrapper: {
      marginLeft: "0%",
      marginTop: "0%",
      width: "100%",
      height: "80%",
    },
    "@media (max-width: 600px)": {
      teamBlockWrapper: {
        marginLeft: 0,
        width: "100%",
      },
    },
  })
);

const ProjectsBlock = ({ isLight }: TProjectsBlockProps) => {
  const classes = useStyles();
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
  const InShadow = isLight ? lInShadow : dInShadow;
  return (
    <Container maxWidth="lg">
      <div className={classes.teamBlockWrapper}>
        <Grid
          container
          spacing={10}
          className={classes.teamBlockContentWrapper}
        >
          <Grid item xs>
            {/* <Project/> */}
            <Project
              MainBackgroundColor={MainBackgroundColor}
              SecondaryTextColor={SecondaryTextColor}
              TextColor={TextColor}
              Shadow={InShadow}
              subj="Web site"
              mainText="Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati"
            />
          </Grid>
          <Grid item xs>
            <Project
              MainBackgroundColor={MainBackgroundColor}
              SecondaryTextColor={SecondaryTextColor}
              TextColor={TextColor}
              Shadow={InShadow}
              subj="Web site"
              mainText="Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati"
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default connector(ProjectsBlock);
