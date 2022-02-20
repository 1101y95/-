import express from "express";
import cors from 'cors';

const app = express();
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



app.listen(3000);