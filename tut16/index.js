let submit=document.getElementById("submit")
let count=0
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let title=document.getElementById("title").value
    let desc=document.getElementById("description").value
    let root=document.getElementById("root")
    root.innerHTML+=`
    <div id=${count}>
    <h1>${title}</h1>
    <p>${desc}</p>
    <button id="remove">remove</button>
    </div>
    `
    count=count+1;
})

let remove=document.getElementById("remove")
remove.addEventListener("click",(e)=>{
    e.preventDefault()
    let root1=document.getElementById(count)
    root1.innerHTML=""
})