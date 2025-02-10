class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name+" is running!")
    }
    shout(){
        console.log(this.name+" is shouting!")
    }
}

class Monkey extends Animal{//here inherits the animal cls constructor
    // constructor(name,color){
    //     this.name=name;
    //     this.color=color;
    // }
    // run(){
    //     console.log(this.name+" is running!")
    // }
    // shout(){
    //     console.log(this.name+" is shouting!monkey")
    // }
    eatBanana(){
        console.log("banana")
    }
    hide(){
        console.log(`${this.name} is hiding`)//work
    }
}
let ani=new Animal("Chimtu1","brown")
let m=new Monkey("Chimtu2","white")

ani.shout();
m.shout();
// o/p:
// Chimtu1 is shouting!
//  Chimtu2 is shouting!
m.hide()

