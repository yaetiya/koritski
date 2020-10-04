import { createMuiTheme } from "@material-ui/core/styles";


export const orangeColor = "#F65D2E";

export const lMainBackgroundColor = "#EEEFF2";
export const lLightBackgroundColor = "#DFE5ED";
export const lTextColor = "#000";
export const lSecondaryTextColor = "#919499";
export const lOutShadow = "-10px -10px 20px #FFFFFF, 10px 10px 20px #D3D8E8";
export const lInShadow = "inset 20px 20px 20px #D3D8E8, inset -20px -20px 22px #FFFFFF";
export const lNavSmallBtnShadow = "5px 5px 40px #DEDEDE"


export const dMainBackgroundColor = "#1B1D22";
export const dLightBackgroundColor = "#21262D";
export const dTextColor = "#FFFFFF";
export const dSecondaryTextColor = "#A8A2A0";
export const dOutShadow = "-10px -10px 25px #21252C, 10px 10px 25px #121212";
export const dInShadow = "inset 20px 20px 30px #121417, inset -20px -20px 50px #212529";
export const dNavSmallBtnShadow = "5px 5px 40px rgba(0, 0, 0, 0.4)"


export const theme = createMuiTheme({
  palette: {
    primary: {
      main: orangeColor,
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});
