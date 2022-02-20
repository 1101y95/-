import express from "express";

const app = express()

//get요청이 들어왔을때
app.get("/get", function (req,res){
    res.send("hello world"); //응답보내기
})

app.listen(3000);