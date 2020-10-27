import { TStore } from "../typescript/storeType";
export const selectLangState = (state: TStore) => state.lang;
export const selectLang = (state: TStore) :boolean => selectLangState(state).lang;

export const selectThemeState = (state: TStore) => state.theme;
export const selectTheme = (state: TStore) :boolean => selectThemeState(state).isLightTheme;