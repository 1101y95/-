import express from "express";

const app = express()
app.use(express.json())

//get요청이 들어왔을때
app.get("/boards", function (req,res){
    // res.send("hello world"); //응답보내기

    //데이터를 조회하는 로직
    res.send([
        { number: 1, writer: "철수", title: "제목입니다~~~", contents: "내용이에요!!!" },
        { number: 2, writer: "영희", title: "좋은 날씨입니다!", contents: "내용@@@@@" },
        { number: 3, writer: "훈이", title: "점심 맛있게 드셨나요?!", contents: "식사 하셨나요?!" },
        { number: 4, writer: "맹구", title: "안녕하세요?!", contents: "내용이요!!!" }
    ])
})

app.post("/board", (req,res)=>{
    //데이터를 등록하는 로직

    // console.log(req)
    console.log(req.body)
    res.send("데이터 등록에 성공하였습니다");
})

app.listen(3000);