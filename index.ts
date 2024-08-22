import inquirer from "inquirer";

class Player {
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel= fuel;
    }
    fuelIncease(){
        let fuel =100;
        this.fuel = fuel;
    }
}
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel -25;
        this.fuel = fuel;
    }
}

let askName = await inquirer.prompt([{
    name:"name",
    message:"Enter your name: ",
    type:"input"
}])

let p1 =new Player(askName.name);

let select = await inquirer.prompt([{
    name:"youropponent",
    message:"Select Your Opponent: ",
    type:"list",
    choices:["Car","Bus","Truck"]
}])
let o1 = new Opponent(select.youropponent);
do{
    // Car 
if(select.youropponent == "Car"){
    let nextStep = await inquirer.prompt([{
        name:"chooseoption",
        message:"What would you like to do??? ",
        type:"list",
        choices:["Attack","Drink Portion","Run for your life.."]
    }])
    // attack
if(nextStep.chooseoption == "Attack"){
        let randomNumber = (Math.floor(Math.random()*2));
    if(randomNumber>0){
            o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}\n${o1.name} fuel is ${o1.fuel}`);
        if(p1.fuel == 0){
            console.log("You Lose...Better Luck Next Time!");
            process.exit();
        }
        if(o1.fuel == 0){
            console.log("Congratulations!!!You Won...");
            process.exit();
        }

    }
    else if(randomNumber<=0){
            p1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}\n${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel == 0){
                console.log("You Lose...Better Luck Next Time!");
                process.exit();
            }
            if(o1.fuel == 0){
                console.log("Congratulations!!!You Won...");
                process.exit();
            }
    }
}//attack ends
// drink portion
else if(nextStep.chooseoption == "Drink Portion"){
        p1.fuelIncease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
}//drink portion ends
//runforyourlife
else {
        console.log("You lose...Better Luck Next Time!");
        process.exit();
}//runforyourlife ends
}//car ends
else if(select.youropponent == "Bus"){
    let nextStep = await inquirer.prompt([{
        name:"chooseoption",
        message:"What would you like to do??? ",
        type:"list",
        choices:["Attack","Drink Portion","Run for your life.."]
    }])
if(nextStep.chooseoption == "Attack"){
    let randomNumber = (Math.floor(Math.random()*2));
    if(randomNumber>0){
            o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}\n${o1.name} fuel is ${o1.fuel}`);
        if(p1.fuel == 0){
            console.log("You Lose...Better Luck Next Time!");
            process.exit();
        }
        if(o1.fuel == 0){
            console.log("Congratulations!!!You Won...");
            process.exit();
        }

    }
    else if(randomNumber<=0){
            p1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}\n${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel == 0){
                console.log("You Lose...Better Luck Next Time!");
                process.exit();
            }
            if(o1.fuel == 0){
                console.log("Congratulations!!!You Won...");
                process.exit();
            }
    }
}
else if(nextStep.chooseoption == "Drink Portion"){
        p1.fuelIncease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
}
else {
        console.log("You lose...Better Luck Next Time!");
        process.exit();
}

}
//truck
else {
    let nextStep = await inquirer.prompt([{
        name:"chooseoption",
        message:"What would you like to do??? ",
        type:"list",
        choices:["Attack","Drink Portion","Run for your life.."]
    }])
if(nextStep.chooseoption == "Attack"){
        let randomNumber = (Math.floor(Math.random()*2));
    if(randomNumber>0){
            o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}\n${o1.name} fuel is ${o1.fuel}`);
        if(p1.fuel == 0){
            console.log("You Lose...Better Luck Next Time!");
            process.exit();
        }
        if(o1.fuel == 0){
            console.log("Congratulations!!!You Won...");
            process.exit();
        }

    }
    else if(randomNumber<=0){
            p1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}\n${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel == 0){
                console.log("You Lose...Better Luck Next Time!");
                process.exit();
            }
            if(o1.fuel == 0){
                console.log("Congratulations!!!You Won...");
                process.exit();
            }
    }
}
else if(nextStep.chooseoption == "Drink Portion"){
        p1.fuelIncease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
}
else {
        console.log("You lose...Better Luck Next Time!");
        process.exit();
}
}
}
while(true);