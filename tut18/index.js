class password{
    constructor(){
        console.log("welcome to password generator")
        this.pass=""
    }
    generatepassword(len){
        let numbers="1234567890"
        let alphabets="abcdefghijklmnopqrstuvwxyz"
        let characters="!@#$%^&*()"
        let i=0
        while(i<len)
        {
            this.pass+=numbers[Math.floor(Math.random()*numbers.length)]
            i=i+1
            this.pass+=alphabets[Math.floor(Math.random()*alphabets.length)]
            i=i+1
            this.pass+=characters[Math.floor(Math.random()*characters.length)]
            i=i+1
        }
        return this.pass
    }
}

let p=new password()
console.log(p.generatepassword(7))
