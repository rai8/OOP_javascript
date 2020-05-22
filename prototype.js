//we'll be using prototype to duplicate code

function Dog(name){
    this.name=name
    Dog.prototype.numLegs=4
}
//Dog.prototype.numLegs=4

let beagle=new Dog('Snoopy')
console.log(beagle)
console.log(beagle.numLegs)
console.log(Dog.prototype)