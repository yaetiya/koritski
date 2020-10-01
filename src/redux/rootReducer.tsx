import { TStore } from "../typescript/storeType";
// import emailjs from 'emailjs';
import $ from "jquery";
import { CHANGE_LANG, CHANGE_THEME, FORM_SEND } from "./types";

const initialState: TStore = {
  lang: {
    lang: localStorage.getItem("lang") === "false" ? false : true,
  },
  theme: {
    isLightTheme: localStorage.getItem("theme") === "false" ? false : true,
  },
  lastSubmit: {},
};

export const rootReducer = (state = initialState, action: any): TStore => {
  switch (action.type) {
    case CHANGE_LANG:
      localStorage.setItem("lang", `${action.payload}`);
      return { ...state, ...{ lang: { lang: action.payload } } };
    case CHANGE_THEME:
      localStorage.setItem("theme", `${action.payload}`);
      return {
        ...state,
        ...{ theme: { isLightTheme: action.payload } },
      };
    case FORM_SEND:
      console.log(action.payload);
      var data = {
        service_id: "service_04ep1gj",
        template_id: "template_3mmsqqn",
        user_id: "user_ZtdLmGhn3fFEh886t0qEZ",
        
        template_params: {
          username: action.payload.company,
          company: action.payload.company,
          email: action.payload.email,
          phone: action.payload.phone,
          idea: action.payload.idea,
          id: action.payload.id,
          "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
        },
      };
      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
      })
        .done(function () {})
        .fail(function (error) {
          alert("SORRY EMAIL CAN'T BE SEND(");
        });

      return { ...state, ...{ lastSubmit: action.payload } };
    default:
      return state;
  }
};
