import { createMuiTheme } from "@material-ui/core/styles";


export const orangeColor = "#F65D2E"; // Orange Primary

//light Theme
export const lMainBackgroundColor = "#EBEBEB"; //backgroundCOlor
export const lLightBackgroundColor = "#DDD"; // Second backgroung color
export const lTextColor = "#000"; //TextColor
export const lSecondaryTextColor = "#3c3c3c"; //Second Text color
export const lOutShadow = "-10px -10px 40px #FFFFFF, 10px 10px 40px #C5C5C5";
export const lInShadow = "inset 20px 20px 30px #D2D2D2, inset -20px -20px 50px #FFFFFF";
export const lNavSmallBtnShadow = "5px 5px 40px #DEDEDE"


//dark Theme
export const dMainBackgroundColor = "#1B1D22";
export const dLightBackgroundColor = "#21262D";
export const dTextColor = "#FFFFFF";
export const dSecondaryTextColor = "#A8A2A0";
export const dOutShadow = "-10px -10px 40px #222831, 10px 10px 40px #121212";
export const dInShadow = "inset 20px 20px 30px #121417, inset -20px -20px 50px #212529";
export const dNavSmallBtnShadow = "5px 5px 40px rgba(0, 0, 0, 0.4)"


export const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orangeColor,
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});
