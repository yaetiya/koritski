import { combineReducers } from "redux";
import { TStore } from "../typescript/langState";
import { CHANGE_LANG, CHANGE_THEME } from "./types";

const initialState: TStore = {
  lang: {
    lang: false,
  },
  theme: {
    isLightTheme: true,
  },
};

export const rootReducer = (state = initialState, action: any): TStore => {
  console.log(state);
    switch (action.type) {
      case CHANGE_LANG:
        console.log(state);
        return { ...state, ...{ lang: { lang: state.lang.lang } } };
      case CHANGE_THEME:
        console.log(state);
        return {
          ...state,
          ...{ theme: { isLightTheme: action.payload } },
        };
      default:
        return state;
    }
};
