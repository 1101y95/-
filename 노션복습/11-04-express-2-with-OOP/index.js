import express from "express"
import { CashService } from "./cash";
import { ProductService } from "./product";

const app = express();

app.post("/product/buy", (req,res)=>{
    //상품 구매하기

    //1.가진 돈을 검증하는 코드
    const moneyService = new CashService()
    const hasMoney = moneyService.checkValue();
    
    //2.판매여부 검증하는 코드
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout()
    //3.상품 구매하는 코드
    
    if(hasMoney&&isSoldout){
    //4. if(돈있음&&판매중)
    res.send("상품을 구매합니다")
    }
    
})

app.post("/product/refund", (req,res)=>{
    //상품 환불하기

    //1.판매여부를 검증하는 코드
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout()

    //if(판매완료)
    if(isSoldout){
    //2.상품을 환불하는 코드
    res.send("상품을 환불합니다")
    }
    
})

app.listen(3000)