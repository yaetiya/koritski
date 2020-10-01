import { TFormData } from "./form";

export type TStore = {
  theme: {
    isLightTheme: boolean;
  };
  lang: {
    lang: boolean;
  };
  lastSubmit:TFormData|{};
};
