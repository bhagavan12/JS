class Employee{
    constructor(name){
        this.name=name;
        console.log(`${name} super cls`);
    }
    login(){
        console.log(`emplyee has logged in`);
    }
    logout(){
        console.log(`employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves -auto approved`);
    }
}
class Programmer extends Employee{//if there is no constructoor inn child cls,this is created automatically
    constructor(name){
        super(name);// Calls Employee constructor
        console.log("child const")
    }
    requestLeaves(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    //JavaScript does not support method overloading in the traditional sense, so the second definition of requestLeaves in
    // Programmer overrides the first one. The requestLeaves(x) method is defined but never used because the next method definition takes precedence.
    requestLeaves(leaves){//this local property is called ,then if it is not available then superclass funciton will call
        // console.log(`Employee has requested ${leaves+1} leaves(one extra)`);
        super.requestLeaves(leaves)//o/p:Employee has requested 3 leaves
    }
}

let e=new Programmer("teja");
e.login();
e.requestLeaves(3);