import { CHANGE_LANG, CHANGE_THEME } from "./types";

export function changeLang(newLang: boolean) {
  return {
    type: CHANGE_LANG,
    payload: newLang,
  };
}
export function changeTheme(newIsLight: boolean) {
  console.log(newIsLight);
  return {
    type: CHANGE_THEME,
    payload: newIsLight,
  };
}
