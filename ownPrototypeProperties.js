function Bird(name, color){
    this.name=name //this here is an own propety
    this.color=color
}
Bird.prototype.numLegs=2 //this here is a prototype property
Bird.prototype.eyes=2

let duck=new Bird('Chichi','red')

let ownProps=[]
let prototypeProps=[]

for(let property in duck){
    if(duck.hasOwnProperty(property)){
        ownProps.push(property)
    }
    else{prototypeProps.push(property)}
console.log(property)
}

console.log(ownProps, prototypeProps)

//bit more od the constructor property
console.log(duck.constructor==Bird)