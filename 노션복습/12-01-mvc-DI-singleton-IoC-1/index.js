import express from "express"
import { CouponController } from "./mvc/controller/coupon.controller";
import { ProductController } from "./mvc/controller/product.controller";
import { CashService } from "./mvc/controller/service/cash";
import { ProductService } from "./mvc/controller/service/product";

const app = express();

const moneyService = new CashService()
const productService = new ProductService()

const productController = new ProductController(moneyService,productService)
app.post("/product/buy", productController.buyProduct)
app.post("/product/refund", productController.refundProduct)

const couponController = new CouponController(moneyService);
app.post("/coupon/buy", couponController.buyCoupon)

app.listen(3000)