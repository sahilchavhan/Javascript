document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";
document.getElementsByTagName("li")[1].style.background="cyan";
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background='green';
})

document.body.getElementsByTagName('nav')[0].firstElementChild.style.background="black";
document.body.firstElementChild.lastElementChild.style.background='blue';

document.getElementById("one").innerHTML="<b>homeee</b>";
document.getElementById('three').outerHTML="<span>menuss</span>";
// console.log(docuent.body.textContent);// copy text from webpage

let a=document.getElementById("two");
let b=a.getAttribute("class");
console.log(b);
console.log(a.hasAttribute("class"));//used to check wether id="two" is having a attribute of class or not
console.log(a.hasAttribute("style"));
a.setAttribute("hidden","true");//hidden sttribute is sethaving value true
// a.setAttribute("hidden","false");
a.setAttribute("class","true sachin");//here we have given two classes "true" and "sachin"
a.removeAttribute("hidden");

let c=document.getElementsByTagName("li")[3];
c.innerHTML=c.innerHTML+"<h1>sahil</h1>";
document.getElementsByTagName("li")[3].innerHTML=document.getElementsByTagName("li")[3].innerHTML+"<h1>chavhan</h1>";

let d= document.createElement('div');
d.innerHTML="<p>nagpur</p>";
c.appendChild(d);

let f=document.body.getElementsByTagName("li")[0];
f.insertAdjacentHTML('beforebegin','<div>beforebegin</div>');
f.insertAdjacentHTML('afterbegin','<div>AFTERbegin</div>');
f.insertAdjacentHTML('beforeend','<div>beforeend</div>');
f.insertAdjacentHTML('afterend','<div>AFTERend</div>');