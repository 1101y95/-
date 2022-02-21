let aa = "hi"

//aa=3

let bb:string
bb="jjj"
//bb=123

let cc:number = 8;

let arr:number[] = [1,2,3]

let arr2:Array<number> =[1,2,3]

let dd:number[] = [1,2,3,4,5]
let ee:(number|string)[] = ["1",2,3,"4",5]


let ff:(number[]|string[]) = ["1","2","3"]
ff = [1,2,3,]



interface IProfile{
    name :string
    age: number
}

let profile:IProfile ={
    name: "sia",
    age: 13
}