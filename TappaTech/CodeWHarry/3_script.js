let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hey i am resolved")
    },2000)
})
p1.then((val)=>{
    console.log("Hurray",val)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4);
        },4000)
    })
}).then((value)=>{
    // alert(value);
    console.log("value",value);
})

p1.then((val)=>{
    // alert("cong")
    console.log("congratulations this promise p1 is now resolved ")
})