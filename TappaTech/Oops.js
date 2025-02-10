// What is Object Literal?
// Object literal is simply key: pair data structure.
// Storing variables and functions together in one container,
// we can refer this as an Objects.

//1st of way of creation of object
let bio = {
    myName: "teja",
    myAge: 21,
    "Eduction Details": ["narayana schl", "sasi clg", "KLU"],
    func: () => {
        // console.log(`My name is ${bio.myName} and My age ${bio.myAge}`);
    },
    obj: {
        obj1: "1",
        obj2: 2
    }
}
// bio.func();//My name is teja and My age 21
// console.log(bio.obj.obj2);//2
// console.log(bio["Eduction Details"][1]);//sasi clg


//this object
// The definition of "this" object is that it contain the current context.
// The this object can have different values depending on where it is placed.
// console.log(this);// it refers to the current context and that is window global object
//https://chat.openai.com/share/d16784d6-6f71-48d1-ae0f-393b4fd40979

// // ex 4
const obj = {
    myAge: 26,
    myName() {
        // console.log(this.myAge);
    }
};
// obj.myName();//function called using object so it will get that func scoped value otherwise it will get window global varaible or undefined

//ex 5
const obj1 = {
    myAge: 26,

    myName: () => {
        // console.log(this);
    }
}
// obj1.myName();// {} -bcoz for labmda function it will not work or it will get window

