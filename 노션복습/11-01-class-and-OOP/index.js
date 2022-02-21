class Monster{
    power = 10

    constructor(attackStep){
        if(attackStep) this.power = attackStep
    }

    attack(){
        console.log("공격")
        console.log("공격력: "+ this.power)
    }

    fly(){
        console.log("날아라")
    }
}


const monster1 = new Monster
monster1.attack()
monster1.fly()

const strongMonster = new Monster(90)
strongMonster.attack();
strongMonster.fly();