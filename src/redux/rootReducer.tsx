import { TStore } from "../typescript/storeType";
import { CHANGE_LANG, CHANGE_THEME } from "./types";

const initialState: TStore = {
  lang: {
    lang: (localStorage.getItem('lang')=="false") ? false : true ,
  },
  theme: {
    isLightTheme: (localStorage.getItem('theme')=="false") ? false : true,
  },
};

export const rootReducer = (state = initialState, action: any): TStore => {
    switch (action.type) {
      case CHANGE_LANG:
        localStorage.setItem("lang",`${action.payload}`)
        return { ...state, ...{ lang: { lang: action.payload } } };
      case CHANGE_THEME:
        localStorage.setItem("theme",`${action.payload}`)
        return {
          ...state,
          ...{ theme: { isLightTheme: action.payload } },
        };
      default:
        return state;
    }
};
