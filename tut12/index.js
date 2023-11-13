// //fetch api-get method
// let p=fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value)=>{
//     console.log(value)
// })


//fetch api- post method
let options={
    method: "POST",
    Headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title:'sahil',
        body:'chvhan',
        userId: 1100,
    }),
}
fetch('https://jsonplaceholder.typicode.com/posts', options)
.then((response)=>response.json())
.then((json)=>console.log(json));