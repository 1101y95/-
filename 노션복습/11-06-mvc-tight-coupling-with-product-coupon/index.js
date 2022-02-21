import express from "express"
import { CouponController } from "./mvc/controller/coupon.controller";
import { ProductController } from "./mvc/controller/product.controller";

const app = express();

const productController = new ProductController()
app.post("/product/buy", productController.buyProduct)
app.post("/product/refund", productController.refundProduct)

const couponController = new CouponController();
app.post("/coupon/buy", couponController.buyCoupon)

app.listen(3000)