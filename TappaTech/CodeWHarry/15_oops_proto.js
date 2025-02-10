let a={
    namef:'teja',
    langiage:'js',
    runn:()=>{
        // alert("self run");
        console.log("self run")
    }
}
console.log(a);

let p={
    runn:()=>{
        alert("run");
    }
}
p.__proto__={
    name:"Jackie"
}
a.__proto__=p;//prototypal inheritance
a.runn();
console.log(a.name)// jackie(super super class->super class->clss inheritance)