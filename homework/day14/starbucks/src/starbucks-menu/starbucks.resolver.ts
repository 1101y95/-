
import { StarBucksBoard } from "./starbucks.service"
import { Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { CoffeeDetail } from "./starbucks.entity";

@Resolver()
export class StarBucksResolver{
    constructor(private readonly starbucksBoard: StarBucksBoard){}

    @Query(()=>[CoffeeDetail])
    viewTheMenu():CoffeeDetail[]{
        return this.starbucksBoard.viewBoard();
    }

    @Mutation(()=>String)
    createNewMenu(
        @Args("menu")menu: string,
        @Args("price")price: string,
        @Args("kcal")kcal: string,
        @Args("fat")fat: string,
        @Args("protein")protein: string,
        @Args("salt")salt: string,
        @Args("sugar")sugar: string,
        @Args("caffeine")caffeine: string,

        @Args("CoffeeDetail") CoffeeDetail: CoffeeDetail,
    ): string{
        return this.starbucksBoard.createNewMenu({
            menu,
            price,
            kcal,
            fat,
            protein,
            salt,
            sugar,
            caffeine
        });
    }

}

