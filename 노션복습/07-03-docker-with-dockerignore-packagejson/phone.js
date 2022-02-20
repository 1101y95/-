import axios from "axios";
import dotenv from "dotenv"

export function checkValidationPhone(phone){
    //휴대폰번호가 알맞은지 판단하는 코드
    if(phone.length !== 10 && phone.length !== 11){
       console.log("에러발생! 휴대폰 번호를 제대로 입력해주세요")
       return false;
   }
   return true;
}

export function getToken(count){
   //토큰을 만드는 코드
   if(count === undefined){
       console.log("에러발생! 갯수를 입력해주세요"); return;
   }else if(count<=0){
       console.log("에러발생! 갯수가 너무 적습니다"); return;
   }else if(count>=10){
       console.log("에러발생! 갯수가 너무 많습니다"); return;
   }

   const result = String(Math.floor(Math.random()*10**count)).padStart(count,"0")

   return result;
}

export async function sendTokenToSMS(phone,token){
    const appKey = process.env.appKeyPhone
    const XSecretKey = process.env.XSecretKeyPhone
    const sender = process.env.senderPhone

   await axios.post(
       `https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`,
        {
            body: `인증번호는 ${token}입니다~`,
            sendNo: sender,
            recipientList : [{internationalRecipientNo: phone}]
        },
        {
            headers: {
                "X-Secret-Key": XSecretKey,
                "Content-Type": "application/json;charset=UTF-8"
            }
        }
   )

   console.log(`${phone}번호로 ${token}를 전송합니다`);
}