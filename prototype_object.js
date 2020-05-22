//an efficient way is to set the prototype to a new object that contains all the properties

function Dog(name){
    this.name=name
}
Dog.prototype={
    constructor:Dog,//defining the constructor property
    numLegs:4,
    eat:function(){
        console.log('nom nom nom')
    },
    describe:function(){
        console.log(`My name is ${this.name}`)
    }
}
const chiuwawa=new Dog("Alexi")
console.log(Dog.prototype.isPrototypeOf(chiuwawa))

console.log(chiuwawa.describe())
console.log(chiuwawa instanceof Dog)