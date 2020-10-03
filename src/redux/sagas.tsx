import { takeEvery } from 'redux-saga/effects';
import { FORM_SEND } from './types';

function* workerSendData(action:any){
    let data = {
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
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      yield;
      
}

export function* watchSendForm(){
    yield takeEvery(FORM_SEND, workerSendData);
}