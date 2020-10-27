import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InstagramIcon from "@material-ui/icons/Instagram";
import CloseIcon from "@material-ui/icons/Close";

import { sendForm } from "../redux/actions";
import {
  Button,
  Container,
  createStyles,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Theme,
} from "@material-ui/core";
import HeadText from "../components/HeadText";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dInShadow,
  dLightBackgroundColor,
  dMainBackgroundColor,
  dTextColor,
  lInShadow,
  lLightBackgroundColor,
  lMainBackgroundColor,
  lTextColor,
  orangeColor,
} from "../config/palette";
import { enLang, ruLang } from "../config/text";
import { TFormData } from "../typescript/form";
import { instagramLink } from "../config/links";
import { selectLang, selectTheme } from "../redux/selectors";

type TForm = {
  phone: String;
  email: String;
  company: String;
  idea: String;
};


const Form = () => {
  const isLang = useSelector(selectLang);
  const isLight = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const lang = isLang ? enLang : ruLang;
  const MainBackgroundColor = isLight
    ? lMainBackgroundColor
    : dMainBackgroundColor;
  const LightBackgroundColor = isLight
    ? lLightBackgroundColor
    : dLightBackgroundColor;
  const TextColor = isLight ? lTextColor : dTextColor;
  const InShadow = isLight ? lInShadow : dInShadow;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      alert: {
        backgroundColor: orangeColor,
        color: TextColor,
      },
      formSection: {
        paddingBottom: 120,
      },
      formWrapper: {
        marginTop: 120,
      },
      socialBtn: {
        color: orangeColor,
        height: 40,
        width: 40,
      },
      socialBtnWrapper: {
        marginRight: 20,
      },
      sbBtn: {
        backgroundColor: MainBackgroundColor,
        height: 40,
        width: 180,
        fontWeight: "bold",
        // fontSize: 18,
        // border: "2px solid " + orangeColor,
        borderRadius: 8,
      },
      alignRight: {
        textAlign: "right",
      },
      LTBBackground: {
        width: "100%",
        borderRadius: 13,
        backgroundColor: LightBackgroundColor,
        marginBottom: 50,
      },
      LTBTextField: {
        width: "92%",
        marginTop: 20,
        marginBottom: 20,
      },
      LTBWrapper: {
        marginLeft: "4%",
        minWidth: 200,
      },
      inputColor: {
        color: TextColor,
        textDecorationColor: TextColor,
      },

      LTDBackground: {
        width: "100%",
        boxShadow: InShadow,
        borderRadius: 13,
        minHeight: 216,
        marginBottom: 50,
      },
      LTDTextField: {
        width: "92%",
        marginTop: 20,
        marginBottom: 20,
      },
      LTDWrapper: {
        marginLeft: "4%",
      },
      "@media (max-width: 600px)": {
        LTDBackground: {
          minHeight: 0,
          width: "133%",
        },
        LTBWrapper: {
          marginLeft: 10,
        },
        alignRight: {
          textAlign: "center",
        },
      },
    })
  );
  const [state, setState] = useState<TForm>({
    phone: "",
    email: "",
    company: "",
    idea: "",
  });

  const classes = useStyles();
  const submitHandler = () => {
    const item: TFormData = {
      ...state,
      id: Date.now().toString(),
    };
    if (validation(item)) {
      dispatch(sendForm(item));
      setState({
        phone: "",
        email: "",
        company: "",
        idea: "",
      });
    }
    setOpen(true);
  };
  const validation = (item: TFormData): boolean => {
    let noError: boolean = true;
    if (
      item.email.indexOf("@") === -1 ||
      item.email.indexOf(".") === -1 ||
      item.company.trim().length === 0 ||
      item.idea.trim().length === 0 ||
      item.phone.trim().length === 0
    ) {
      noError = false;
      setAlertMessage(lang.form.alerts.error);
    } else {
      setAlertMessage(lang.form.alerts.submit);
    }
    return noError;
  };
  const changeTextFieldHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.persist();
    setState((prev: TForm) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <div>
        <Snackbar
          ContentProps={{
            classes: {
              root: classes.alert,
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={alertMessage}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>

      <Container maxWidth="lg" className={classes.formSection}>
        <HeadText mainText={lang.headl.form} lightColor={TextColor} />
        <form>
          <Grid container spacing={3} className={classes.formWrapper}>
            <Grid item xs>
              <div className={classes.LTBBackground}>
                <div className={classes.LTBWrapper}>
                  <TextField
                    id="phone"
                    name="phone"
                    InputProps={{
                      className: classes.inputColor,
                    }}
                    placeholder={lang.form.placeholders.phone}
                    onChange={changeTextFieldHandler}
                    value={state?.phone}
                    color="primary"
                    className={classes.LTBTextField}
                  />
                  <TextField
                    id="email"
                    name="email"
                    InputProps={{
                      className: classes.inputColor,
                    }}
                    onChange={changeTextFieldHandler}
                    value={state?.email}
                    placeholder={lang.form.placeholders.email}
                    color="primary"
                    className={classes.LTBTextField}
                  />
                  <TextField
                    name="company"
                    id="company"
                    InputProps={{
                      className: classes.inputColor,
                    }}
                    onChange={changeTextFieldHandler}
                    value={state?.company}
                    placeholder={lang.form.placeholders.company}
                    color="primary"
                    className={classes.LTBTextField}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className={classes.LTDBackground}>
                <div className={classes.LTDWrapper}>
                  <TextField
                    id="idea"
                    name="idea"
                    InputProps={{
                      className: classes.inputColor,
                    }}
                    value={state?.idea}
                    onChange={changeTextFieldHandler}
                    placeholder={lang.form.placeholders.idea}
                    color="primary"
                    multiline={true}
                    className={classes.LTDTextField}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className={classes.alignRight} xs>
              <Button
                className={classes.socialBtnWrapper}
                href={instagramLink}
                target="_blanck"
              >
                <InstagramIcon className={classes.socialBtn} />
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{ border: "2px solid" }}
                className={classes.sbBtn}
                onClick={submitHandler}
              >
                {lang.form.submitBtn}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Form;
