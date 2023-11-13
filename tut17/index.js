function simpleinterest(p,n,r){
    return p*n*r/100
}
console.log(simpleinterest(1000,5,10))


const a=(text,n)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
           resolve(text)
       }, 1000*n);
    })
}

(
    async()=>{
        let text1=await a("hello",2)
        console.log(text1)
        let text2=await a("world",3)
        console.log(text2)
    }
)()

const cat=(x,y,z)=>{
    return (x+y+z)/3
}
(
    ()=>{
        let ball=[10,20,30]
        console.log(cat(...ball))
    }
)()


function music(url){
    var audio=new Audio(url)
    audio.play()
}
let url1="https://programminghead.com/audio/audio.mp3"
music(url1)