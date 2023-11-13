// //promises
// let p1=new Promise((resolve, reject)=>{
//     console.log("promise is pending")
//     setTimeout(() => {
//         resolve(true)
//         console.log("i am a promise and i am fulfilled")
//         // reject(new Error("i am an error"));
//     }, 4000);
// })

// let p2=new Promise((resolve, reject)=>{
//     console.log("promise is pending")
//     setTimeout(() => {
//         // console.log("i am a promise and i am fulfilled")
//         // resolve(true)
//         reject(new Error("i am an error"));
//     }, 4000);
// })

// let promise=new Promise(resolve=>{
//     setTimeout(() => {
//         resolve("done")
//     }, 4000);
// })
// promise.then(console.log("hello y name is ssahil"))

// console.log(p1);
// console.log(p2);
// console.log(promise);
// p1.then((value)=>{
//     console.log(value);
// })

// p2.catch((error)=>{
//     console.log("some error ocured in p2")
// })
// //

// //promise chaining
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("p3 is called")
//         resolve(56)
//     }, 2000);
// })
// p3.then((value)=>{
//     console.log("first chain ",value)
//     let p4=new Promise((resolve,reject)=>{
//         setTimeout(() => {resolve("promise p4")}, 2000);
//     })
//     return p4;
// }).then((value)=>{
//     console.log("we are done",value)
//     return 2
// }).then((value)=>{
//     console.log("we are now done",value)
// })
// console.log(p3)
// //

// //LOADSCRIPT FUNCTION WITH PROMISE CHAINING
// const loadscript =(src)=>{
//     return new Promise((resolve,reject)=>{
//     let script=document.createElement("script")
//     script.type="text/html"
//     script.src=src
//     document.body.appendChild(script)
//     script.onload=()=>{
//         resolve(1)
//     }
//     script.onerror=()=>{
//         reject(0)
//     }
//     })
// }
// let p5=loadscript("http://127.0.0.1:5500/tut10/index.html")
// p5.then((value)=>{
//     console.log(value)
// })
// p5.catch((error)=>{
//     console.log("error")
// })
// console.log(p5)
// //

// //multiple handling of a promise
// let p6=new Promise((resolve, reject)=>{
//     console.log("promise is pending")
//     setTimeout(() => {
//         console.log("i am a promise and i am fulfilled")
//         resolve(100)
//     }, 4000);
// })
// p6.then((value)=>{
//     console.log("hello",value)
// })
// p6.then((value)=>{
//     console.log(value+value)
// })
// p6.then((value)=>{
//     console.log(value-value)
// })
// p6.then((value)=>{
//     console.log(value*value)
// })
// //

//promise api
let p7=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("VALUE 1")
        resolve(100)
    }, 1000);
})
let p8=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("VALUE 2")
        resolve(100)
    }, 2000);
})
let p9=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("VALUE 3")
        resolve(100)
    }, 3000);
})
let promise_all= Promise.all([p7,p8,p9])
let promise_all1= Promise.allSettled([p7,p8,p9])
promise_all.then((value)=>{
    console.log(value)
})

promise_all1.then((value)=>{
    console.log(value)
})
