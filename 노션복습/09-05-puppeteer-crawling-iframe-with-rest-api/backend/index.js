import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
import { getWelcomeTemplate, sendWelcomeTemplateToEmail } from "./email.js";
import mongoose from "mongoose";
import { Board } from "./model/board.model.js";
import {Stock} from "./model/stock.model.js"

const app = express()
app.use(express.json())

//get요청이 들어왔을때
app.get("/boards", async function (req,res){
    // res.send("hello world"); //응답보내기

    //데이터를 조회하는 로직 
    // res.send([
    //     { number: 1, writer: "철수", title: "제목입니다~~~", contents: "내용이에요!!!" },
    //     { number: 2, writer: "영희", title: "좋은 날씨입니다!", contents: "내용@@@@@" },
    //     { number: 3, writer: "훈이", title: "점심 맛있게 드셨나요?!", contents: "식사 하셨나요?!" },
    //     { number: 4, writer: "맹구", title: "안녕하세요?!", contents: "내용이요!!!" }
    // ])

    //데이터를 데이터베이스에서 꺼내오기
    const boards = await Board.find()
    res.send(boards);

})

app.post("/board", async (req,res)=>{
    //데이터를 등록하는 로직//데이터 베이스에 저장하기
    const board = new Board({writer: req.body.writer, title: req.body.title, contents: req.body.contents})
    await board.save();

    // console.log(req)
    console.log(req.body)
    res.send("데이터 등록에 성공하였습니다");
})

app.post("/phone/token", (req,res)=>{
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

app.post("/email/welcome", (req,res)=>{
    const template = getWelcomeTemplate(req.body.user)
    sendWelcomeTemplateToEmail(template, req.body.user.email)
    res.send("이메일을 전송했습니다")
})


app.get("/stocks", async(req,res)=>{
    const stocks = await Stock.find()
    console.log(stocks)
})





app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))



app.listen(3000);

mongoose.connect("mongodb://my_database:27017/codecamp")