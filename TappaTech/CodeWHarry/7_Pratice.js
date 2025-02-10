const loadScript=async (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src=src;
        // setTimeout(()=>console.log("waiting"),2000)
        script.onload=()=>{
            resolve(src+" done success");
        }
        document.head.append(script)
    })
}
// problem1
loadScript("https://www.youtube.com/watch?v=y1j2FL9d31w&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=63")
.then((val)=>{
    console.log(val)
})
// // problem 2
// // const main =async()=>{
// //     console.log("before",new Date().getMilliseconds());
// //     let a =await loadScript("https://www.youtube.com/watch?v=y1j2FL9d31w&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=63")
// //     console.log(a);
// //     console.log("after",new Date().getMilliseconds());
// // }   
// // main();

// // problem 3
// // let p =()=>{
// //     new Promise ((resolve,reject)=>{
// //         setTimeout(()=>{
// //             reject(new Error("please this is not acceptable"));
// //         },3000)
// //     })
// // }

// // let a = async ()=>{
// //     try{
// //         let c = await p();
// //         console.log(c);
// //     }
// //     catch(err){
// //         console.log(err);
// //     }
// // }
// // a()

// let p1=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(10);
//         },1000)
//     })
// }
// let p2=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(20);
//         },3000)
//     })
// }
// let p3=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(30);
//         },5000)
//     })
// }

// const run =async()=>{
//     // let a1= await p1();
//     // let a2= await p2();
//     // let a3= await p3();
//     // console.log(a1,a2,a3);//takes more time 
//     let a1= p1();
//     let a2= p2();
//     let a3= p3();
//     let ans=await Promise.all(a1,a2,a3);
//     console.log()
//     console.timeEnd("run")
// }

// run()


// document.addEventListener('DOMContentLoaded', (event) => {//ensure that to loads this script after fully loaded html page
//     let pa = document.querySelector('#but');
//     console.log(pa);
//     pa.addEventListener('click', () => {
//         setInterval(() => {
//             // num = new Date().toTimeString();
//             num = new Date().toLocaleTimeString();
//             document.getElementById('pid').innerHTML = `${num}`;
//         }, 100)
//     });
// });