import express, { json } from "express";
import cors from 'cors';
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"
// import dotenv from "dotenv";
import { checkEmail, sendEmail} from "./email.js"
import {getWelcomeTemplate} from "./template.js"


// dotenv.config(); //이게 왜 phone.js에 안있고 여기 있어야함?//이건 전역이래;

const app = express();
app.use(express.json());
app.use(cors());

const b =[
    { name: '아메리카노1', Kcal: 5 },
    { name: '아메리카노2', Kcal: 5 },
    { name: '아메리카노3', Kcal: 5 },
    { name: '아메리카노4', Kcal: 5 },
    { name: '아메리카노5', Kcal: 5 },
    { name: '아메리카노6', Kcal: 5 },
    { name: '아메리카노7', Kcal: 5 },
    { name: '아메리카노8', Kcal: 5 },
    { name: '아메리카노9', Kcal: 5 },
    { name: '아메리카노10', Kcal: 5 }  
]

app.get("/coffee", function (req,res){
    return  res.send(b) //응답보내기
  })

  const a = [
    { 
        email : "aaa@gmail.com", 
        name : "철수1",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수2",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수3",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수4",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수5",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    }
]


//get요청이 들어왔을때
app.get("/users", function (req,res){
  res.send(a) //응답보내기
})


app.post('/phone/token', (req, res) => {
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValidationPhone = checkValidationPhone(req.body.phone)
    if(isValidationPhone === true){
        // 2. 핸드폰 토큰 6자리 만들기
        const token = getToken(6)
  
        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(req.body.phone, token)
    }
  
    res.send("인증번호를 전송했습니다.")
  })


app.post("/email",(req,res)=>{
    //email맞는지 확인하기
    const isValildationEmail = checkEmail(req.body.email)
    //이메일 템프릿 생성
    if(isValildationEmail === true)
    {
        const template = getWelcomeTemplate(req.body.name, req.body.email, req.body.site)

        sendEmail(req.body.email,template);

    }
    //이메일 템플릿 이메일으로 전송
    console.log(aaaa);
})



app.listen(3000);