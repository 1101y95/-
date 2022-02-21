import { CashService } from "./service/cash";

export class CouponController{
    buyCoupon(req,res){
        const moneyService = new CashService()
        const hasMoney = moneyService.checkValue()

        if(hasMoney){res.send("쿠폰을 구매합니다")}
    }
}