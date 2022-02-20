import {Injectable} from "@nestjs/common";
import { CoffeeDetail } from "./createMenu";

@Injectable()
export class StarBucksBoard{
    viewBoard(): CoffeeDetail[]{
        return [{
            menu: "black coffee",
            price: "$5",
            kcal: "10kcal",
            fat: "0g",
            protein: "1g",
            salt: "11mg",
            sugar: "1g",
            caffeine: "100mg"
        },
        {
            menu: "black coffee1",
            price: "$5",
            kcal: "10kcal",
            fat: "0g",
            protein: "1g",
            salt: "11mg",
            sugar: "1g",
            caffeine: "100mg"
        },
        {
            menu: "black coffee2",
            price: "$5",
            kcal: "10kcal",
            fat: "0g",
            protein: "1g",
            salt: "11mg",
            sugar: "1g",
            caffeine: "100mg"
        },{
            menu: "black coffee3",
            price: "$5",
            kcal: "10kcal",
            fat: "0g",
            protein: "1g",
            salt: "11mg",
            sugar: "1g",
            caffeine: "100mg"
        }];
    }

    createNewMenu(args): string{
        return "데이터 등록 성공 -확인해볼것."
    }

}