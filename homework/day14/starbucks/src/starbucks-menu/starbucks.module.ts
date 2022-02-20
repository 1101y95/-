
//import {Module} from "@nestjs/common";
import { Module } from "@nestjs/common";
import { StarBucksResolver } from "./starbucks.resolver";
import { StarBucksBoard } from "./starbucks.service";

@Module({
    providers:[StarBucksResolver, StarBucksBoard]
})
export class StarBucksModule{}