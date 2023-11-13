function greet(){
    confirm("Do you want to proceed")
    document.getElementById('heading').style.color='red'
    document.getElementById('heading').style.fontSize='50px'
    // document.getElementById('heading').innerHTML='red'

}

window.onload= function(){
    // alert("document was loaded")
}

heading.addEventListener('click', function(){
    alert("click hua")
})

parra.addEventListener('mouseover', function(){
    // alert("mouseover")
    document.getElementById("parra").innerHTML="my name is sahil chavhan"
})