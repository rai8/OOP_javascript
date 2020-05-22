//using the this keyword is always the better approach inside the object to access a method
//that way if the name of the object is altered then it is not affected
//this refers to the object that the current method is associated with
let dog={
    name:'blackky',
    numLegs:4,
    sayName(){
        return "The name of our dog is "+this.name
    }
}
console.log(dog.sayName())