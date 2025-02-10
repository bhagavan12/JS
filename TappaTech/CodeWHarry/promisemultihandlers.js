const loadScript = () => {
    return new Promise((resolve,reject) => {
        let script = document.createElement("script")
        script.type ="text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload =()=>{
            resolve("script has been loaded");
        }
        script.onerror =()=>{
            reject(0);
        }
    })
}
let p1=loadScript("https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR")
p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log("we are sorry we are having problem loading thiss script",error);
})