//add
const add=(a,b)=>{
    return a+b;
}
//sub
const sub=(a,b)=>{
    return Math.abs(a-b);
}
//mul
const mul=(a,b)=>{
    return a*b;
}
//div
const div=(a,b)=>{
    return a/b;
}
const calculator=(n1,n2,op)=>{//3,2,sub
    return op(n1,n2);//sub(3,2);
}

const ans=calculator(3,2,sub);
// console.log(ans);//o/p:1

//Here calculator is higher order function ,and sub is callback function

