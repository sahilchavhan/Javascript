// // let bt3 = document.getElementById("bt3");
// // bt3.onclick = () => {
// //   alert("red is clicked");
// // };

// bt3.addEventListener("click", function (e) {
//   let url = "https://www.google.com";
//   let win = window.open(
//     url,
//     "",
//     "width=500, height=500, scrollbars=yes,resizable=yes"
//   );
//   win.focus();
// });

// // //bulb event
// // let a = document.getElementById("one");
// // setInterval(function () {
// //   a.classList.toggle("yellow");
// // }, 300);
// // //

// // //clock
// // setInterval(() => {
// //   let b = new Date();
// //   let h = b.getHours();
// //   let m = b.getMinutes();
// //   let s = b.getSeconds();
// //   console.log("time is" + h + m + s);
// // }, 1000);
// // //


// //callbacks-1
// function loadscript(src){
//     var script=document.createElement("script");
//     script.src= src;
//     script.onload=function(){
//         console.log("loaded script with src: "+src)
//     }
//     document.body.appendChild(script);
// }
// loadscript("https://www.google.com")
// //


// //callbacks-2
// function loadscript(src, callback){
//     var script=document.createElement("script");
//     script.src= src;
//     script.onload=function(){
//         console.log("loaded script with src: "+src)
//         callback();
//     }
//     document.body.appendChild(script);
// }

// function hello(){
//     console.log("hello world");
// }
// loadscript("https://www.google.com",hello)
// //

