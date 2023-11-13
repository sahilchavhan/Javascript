class complex{
    constructor(real,imaginary){
        this.real=real
        this.imaginary=imaginary
    }
    add(num){
        this.real=this.real+num.real
        this.imaginary=this.imaginary+num.imaginary
    }

    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }

    set real(newreal){
        this._real=newreal
    }
    set imaginary(newimaginary){
        this._imaginary=newimaginary
    }
}

let a=new complex(1,4)
a.real=10
a.imaginary=20
console.log(a.real,a.imaginary)
let b=new complex(2,6)
a.add(b)
console.log(`${a.real} + ${a.imaginary}i`)
//

//problem-2
class human{
    constructor(name,food){
        this.name=name
        this.food=food
    }
    walk(){
        console.log(`${this.name} human is walking`)
    }
}
class student extends human{
    walk(){
        console.log(`${this.name} student is walking`)
    }
}

let c=new student("sahil","samosa")
c.walk()
console.log(c instanceof human)
console.log(c instanceof student)