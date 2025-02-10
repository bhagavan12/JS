const createTodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}
// https://chatgpt.com/share/b1305a06-d1df-4515-a5dd-447537ea5594
const getTodo = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
            title: 'Harry2',
            body: 'bhai2',
            userId: 1100,
    }
    const curDate = new Date();
    console.log("time before post",Date.now());
    let todor = await createTodo(todo)
    console.log("time after  post",Date.now(),todor);
    // console.log()
    console.log("time beofre  get",Date.now());
    // console.log()
    console.log("time after   get",Date.now(),await getTodo(10));
}

mainFunc()
// o/p:
// time before post 1709449108786
// time after  post 1709449110065 { title: 'Harry2', body: 'bhai2', userId: 1100, id: 101 }  
// time beofre  get 1709449110068
// time after   get 1709449110069 {
//   userId: 1,
//   id: 10,
//   title: 'optio molestias id quia eum',      
//   body: 'quo et expedita modi cum officia vel magni\n' +
//     'doloribus qui repudiandae\n' +
//     'vero nisi sit\n' +
//     'quos veniam quod sed accusamus veritatis error'
// }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      //response.json() is particularly used when the Json data is need to fetch from the network request's response body.
      //returns a promise that resolves with the parsed JSON data
      //JSON.parse() is  used to parse JSON strings into JavaScript objects in any context.
// const obj = { name: 'John', age: 30 };
// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // Output: {"name":"John","age":30}