import express from "express";
import { MongS } from "./models/tokenmodel.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from "../day06/backend/phone.js"
import mongoose  from 'mongoose'
import cors from "cors";
import axios from "axios"
// import {getValidationNumber, submitSignup} from "../day06/frontend/login/signup.js"


mongoose.connect("mongodb://my_database:27017/codecamp")
const app = express();
app.use(express.json());
app.use(cors());


app.post("/tokens/phone",async function(req,res){
    
    console.log("================================================")
    console.log(req)
    const mongs = new MongS({
        //_id: req.body._id,
        // token: req.body.token,
        phone: req.body.phone,
        // isAuth: req.body.isAuth
        //__v: req.body.__v
    })
    console.log(mongs)
    console.log(req.body);
         // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValidationPhone = checkValidationPhone(req.body.phone)
    
    if(isValidationPhone === true){
        // 2. 핸드폰 토큰 6자리 만들기
        const token = getToken(6)

        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(req.body.phone, token)
     
    }
   
    
    await mongs.save();
    res.send("성공!");
})

app.patch("/tokens/phone", async(req,res)=>{
    const mongoRespon = await mongoose.find();
    res.send(mongoRespon);
})

app.listen(3000);