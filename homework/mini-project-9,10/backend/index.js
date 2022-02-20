import express from "express";
import mongoose from "mongoose";
import { StarBucks } from "./models/starbucks.model.js";
import { Token } from "./models/tokens.model.js";
import { User } from "./models/user.model.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"
import cheerio from "cheerio";

const app = express()

app.post("/user",async(req,res)=>{
    //입력받은 휴대폰 정보로 DB 검색
    const userPhone = await User.find((e)=>{e===req.body.phone})
    //isAuth가 false거나 휴대폰 번호가 없다면 422상태코드와 에러반환
    if(userPhone.phone===undefined||userPhone.isAuth===false){
        res.send(console.error("422"))
    }
    //주민번호 뒷자리마스킹
    const resiNum = userPhone.personal;
    const masking = resiNum.split("-")[1].fill("*")
    userPhone.personal = masking;

    //isAuth가 true면 prefer사이트를 스크랩핑해서 og객체에 넣어 다른 정보와 함께 저장
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        personal: req.body.personal,
        prefer: req.body.prefer,
        pwd: req.body.pwd,
        phone: req.body.phone
    })//을 못하겠어... 어떻게 추가하는 거지... models에는 추가했는데
    //DB에 저장한 후 email로 환영템플릿 전송

    res.send("회원가입이 완료되었습니다")
})

app.get("/users", async(req,res)=>{
    //DB에 저장된 회원 목록을 응답으로 보내준다
    const getUser = await User.find();

    res.send("회원목록을 조회합니다\n"+getUser)
})

app.post("/tokens/phone", async(req,res)=>{

    let newToken;

    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValidationPhone = checkValidationPhone(req.body.phone)
    if(isValidationPhone === true){
        // 2. 핸드폰 토큰 6자리 만들기
        const token = getToken(6)
        newToken = token;
  
        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(req.body.phone, token)
    }

    const token = new Token({token: newToken, phone: req.body.phone, isAuth:  false})
    await token.save(); //tokens db에 저장하고 싶다

    res.send(req.body.phone+"번호로 토큰인증 요청을 보냈습니다")
})

app.patch("/tokens/phone", async(req,res)=>{

    const findPhone = await Token.find(e=>e===req.body.phone)//여기서 폰 번호를 검색하고

    //폰 번호와 함께 저장된 토큰을 입력된 토큰과 비교한다
    if(findPhone.token===req.body.token){
        findPhone.isAuth = true;
        await findPhone.save();
        res.send("토큰 인증이 완료되었습니다")
    }

    
})

app.get("/starbucks", async(req,res)=>{
    //커피목록이 저장되어있어야지 조회를 할수있지않을까
    const coffeeList = await StarBucks.find();

    res.send("스타벅스 커피목록을 조회합니다\n"+coffeeList)
})



mongoose.connect("mongodb://my_backend:27017/mini_project")
app.listen(3000);