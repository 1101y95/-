import { CashService } from "./service/cash";

export class CouponController{

    constructor(moneyService){
        this.moneyService = moneyService
    }

    buyCoupon=(req,res)=>{
        const hasMoney = this.moneyService.checkValue();

        if(hasMoney){res.send("쿠폰을 구매합니다")}
    }
}