class Employee{
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
class Programmer extends Employee{
    requestLeaves(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){//this local property is called ,then if it is not available then superclass funciton will call
        // console.log(`Employee has requested ${leaves+1} leaves(one extra)`);
        super.requestLeaves(leaves)//o/p:Employee has requested 3 leaves
    }
}

let e=new Programmer();
e.login();
e.requestLeaves(3);

// Overriding:

// Definition: Subclass provides a new implementation of a method inherited from the superclass.
// Usage: Allows subclasses to customize or extend superclass behavior.