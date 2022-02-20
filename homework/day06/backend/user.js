import express from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

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

// app.post('/user',function (req,res){
    
//     console.log(req);
//     console.log(req.body);
//     res.send(a)
// })


app.listen(3000);