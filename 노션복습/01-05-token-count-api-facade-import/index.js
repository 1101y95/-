import{checkValidationPhone, getToken, sendTokenToSMS} from "./phone.js"

function createTokenOfPhone(phone, count){
    
    //휴대폰번호가 알맞은지 판단하는 코드
   const isValidationPhone = checkValidationPhone(phone)

    //토큰을 만드는 코드
    if(isValidationPhone===true){
        const result = getToken(count)

        //핸드폰번호로 토큰을 전송하는 코드
        sendTokenToSMS(phone,result)
    }
  
}

createTokenOfPhone("01012341234", 6)