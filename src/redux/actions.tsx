import { CHANGE_LANG, CHANGE_THEME } from "./types";

export function changeLang() {
  return {
    type: CHANGE_LANG,
    payload: 1,
  };
}
export function changeTheme(newIsLight: boolean) {
  console.log(newIsLight);
  return {
    type: CHANGE_THEME,
    payload: newIsLight,
  };
}
