import express from "express";

const app = express()

//get요청이 들어왔을때
app.get("/boards", function (req,res){
    // res.send("hello world"); //응답보내기

    //데이터를 조회하는 로직
    res.send("데이터 조회에 성공하였습니다")
})

app.post("/board", (req,res)=>{
    //데이터를 등록하는 로직
    res.send("데이터 등록에 성공하였습니다");
})

app.listen(3000);