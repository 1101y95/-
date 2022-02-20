class Car{
    color = red;
    speedLimit = 200;
    charge = gasoline;

    start = ()=>{
        console.log("출발");
    }
    stop = ()=>{
        console.log("정지");
    }
}

const myCar = new Car();
myCar.color