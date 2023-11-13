// //chapter 9 problem set
// const loadscript =async(src)=>{
//     return new Promise((resolve,reject)=>{
//     let script=document.createElement("script")
//     script.src=src
//     document.body.appendChild(script)
//     script.onload=()=>{
//         resolve(src+ "sahil")
//     }
//     script.onerror=()=>{
//         reject(src+"purthi")
//     }
//     })
// }
// //problem-1
// let a=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value)
// })

// //problem-2
// const main2=async()=>{
//     let a=await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
// }
// main2()

// //problem-3
// const b=()=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject(new Error("my name is sahil"))
//     }, 3000);
// })}
// let c=async()=>{
//     try {
//         let d=await b()
//         console.log(d)
//     } catch (error) {
//         console.log("erreo has occured")
//     }
// }
// c()

//problem-4
let p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}
let p2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(20)
        }, 2000);
    })
}
let p3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}


const run=async()=>{
    let a1=await p1()//fetch first10 products from database
    let a2=await p2()//fetch another 10 products
    let a3=await p3()//fetch another 10 products
    console.log(a1,a2,a3)
    //this will take 6 sec

    let b1=p1();//this method will take only 3secs
    let b2=p2();
    let b3=p3();
    let a1a2a3=await Promise.all([b1,b2,b3])
    console.log(a1a2a3)
}
run()