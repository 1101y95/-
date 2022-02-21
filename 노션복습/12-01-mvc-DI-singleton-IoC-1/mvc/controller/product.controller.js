import {ProductService} from "./service/product.js"
import { CashService } from "./service/cash.js"

export class ProductController {
    

    constructor(moneyService,productService){
        this.moneyService = moneyService
        this.productService = productService
    }




    buyProduct(req, res) {
        // 1. 가진돈 검증하는 코드(10줄 => 2줄)
        const hasMoney = this.moneyService.checkValue()
    
        // 2. 판매여부 검증하는 코드(10줄 => 2줄)
       const isSoldout = this.productService.checkSoldout();
    
        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout) {
            res.send('상품을 구매합니다.')
        }
    }

    refundProduct(req, res) {
        // 1. 판매여부 검증하는 코드(10줄 => 2줄)
        const isSoldout = this.productService.checkSoldout();
    
        // 2. 상품 환불하는 코드
        if(isSoldout){
            res.send('상품을 환불합니다.')
        }
    }

}