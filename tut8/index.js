// //adding and removing clascl
// sahil.classList.add("yellow");
// sahil.classList.add("red");
// sahil.classList.remove("red");
// sahil.classList.contains("red");
// sahil.classList.toggle("red");
// //

// //settimeout 
// alert("hello world");
// let b=setTimeout(function() {
//     alert("i am settimeout")
// }, 5000)
// let a=prompt("do you want to proceed");
// if("n"==a)
// {
//     clearTimeout(b);//it isused to remve the timeout
// }

// const sum=(c,d,e)=>{
//     alert("yes i am running" + (c+d+e))
// }
// setTimeout(sum, 1000, 1,2,7);
// //

// //setinterval
// let f=setInterval(function(){
//     alert("setinterval")
// }, 4000);

// clearInterval(f);
// //


// //browser events
// let g=document.getElementsByTagName("li")[1];
// console.log(g);
// g.onclick=()=>{
//     let f=document.getElementsByTagName("li")[1];
//     f.innerHTML="sahil chavhan";
// }
// //

//event listners
let z=document.getElementById("one");
z.addEventListener('click',function(e){
    // alert("hello world1");
    console.log(e.target);
})