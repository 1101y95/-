import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import mongoose from "mongoose";
import { Token } from "./model/token_models.js";

const app = express();
app.use(express.json());

app.post("/tokens/phone", async function(req,res){



        // 1. 휴대폰번호 자릿수 맞는지 확인하기
         const isValidationPhone = checkValidationPhone(req.body.phone)
    console.log("=======")
         if(isValidationPhone === true){
        //      // 2. 핸드폰 토큰 6자리 만들기
             const token = getToken(6)
     

             const preTokenPhone = await Token.findOne({phone:req.body.phone})
             console.log(preTokenPhone);
         
             if(preTokenPhone){
                 preTokenPhone.token = token
                 await preTokenPhone.save();
                 res.send(token+"<<인증번호");
                 return
                }

          // 3. 핸드폰번호에 토큰 전송하기
             sendTokenToSMS(req.body.phone, token)
             console.log("2222");

            const cer_token = new Token({
                token: req.body.token,
                phone: req.body.phone,
                isAuth: false
            })
            await cer_token.save();
            console.log("3333");

            // res.send("등록에 성공하였습니다");
        }
         
   res.send("어쨋든 연결은 된 듯하다."+req.body.phone)
    return

})

app.patch("/tokens/phone",async(req,res)=>{

   console.log("111");
    const tokens = req.body.token
    const phone = req.body.phone

    const findPhoneNum = await Token.findOne({phone: phone})




console.log(tokens);
    if(findPhoneNum.token !== req.body.token){
        console.log("222");
        res.send("인증번호가 틀립니다.");
        return
    }else{
        console.log("333");
        await findPhoneNum.updateOne({isAuth:true});
        res.send("인증이 완료되었습니다.");
        return
    }

})
mongoose.connect("mongodb://my_database:27017/codecamp")

app.listen(3002);
