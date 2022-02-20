import puppeteer from "puppeteer";
import {Coffee} from "./models/coffee.model.js"
import mongoose from "mongoose";

async ()=>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.setViewport({width:1200, height:720})
    await page.goto("https://www.starbucks.co.kr/menu/drink_list.do")
    await page.waitForTimeout(1000)

    
    //콜드브루만 긁어옴
    for(let i=1; i<=12; i++){

        const img = await page.$eval(`.product_cold_brew > li:nth-child(${i}) > dl:nth-child(1) > dt:nth-child(1) > a:nth-child(1) > img:nth-child(1)`)
        const name = await page.$eval(`.product_cold_brew > li:nth-child(${i}) > dl:nth-child(1) > dd:nth-child(2)`)

        const coffee = new Coffee({
            name: name,
            img: img
        })

        await coffee.save()
    }

}

mongoose.connect("mongodb://localhost:27017/crawler");