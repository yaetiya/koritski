import { TFormData } from "../typescript/form";
import { CHANGE_LANG, CHANGE_THEME, FORM_SEND } from "./types";

export function changeLang(newLang: boolean) {
  return {
    type: CHANGE_LANG,
    payload: newLang,
  };
}
export function changeTheme(newIsLight: boolean) {
  return {
    type: CHANGE_THEME,
    payload: newIsLight,
  };
}


export function sendForm(formData: TFormData) {
  return {
    type: FORM_SEND,
    payload: formData,
  };
}

