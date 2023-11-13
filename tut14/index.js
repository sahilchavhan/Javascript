let a=[
    "configuring files",
    "finding files",
    "confi files",
    "attacking  files",
    "server files",
    "database files",
    "server files"
]

// sleep(()=>{
//     setTimeout(() => {
        
//     }, 3000);
// })


const sleep=(src)=>{
    setTimeout(() => {
        
        document.body.innerHTML+=src;
    }, 3000);
}

for (item in a){
        setTimeout(() => {
            sleep(a[item])
        }, 3000);
    }
        
