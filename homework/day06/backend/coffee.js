import express from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'


const path = require('path')//절대적인 경로의 현재위치

const publicDirectoryPath = path.join(__dirname, "../frontend/menu")//이 파일과 menu파일을 합쳐줌

app.use(express.static(publicDirectoryPath))//절대경로의 위치를 express에 알려줌+join한 위치를 넣어줌





const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

//get요청이 들어왔을때
app.get("/5", function (req,res){
  return  res.send(b) //응답보내기
})


// app.post('/5',function (req,res){
    
//     console.log(req);
//     console.log(req.body);
//     res.send(b)
// })

app.listen(3000);


const b =[
    { name: '아메리카노1', kcal: 5 },
    { name: '아메리카노2', kcal: 5 },
    { name: '아메리카노3', kcal: 5 },
    { name: '아메리카노4', kcal: 5 },
    { name: '아메리카노5', kcal: 5 },
    { name: '아메리카노6', kcal: 5 },
    { name: '아메리카노7', kcal: 5 },
    { name: '아메리카노8', kcal: 5 },
    { name: '아메리카노9', kcal: 5 },
    { name: '아메리카노10', kcal: 5 }  
]