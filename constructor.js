//constructors are functions that create new objects
//they define properties and behavior that belong to the new object
//are blueprint for creating new objects
//are defiened with a caputalized name
//uses the this keyword to set pro
//uses the this keyword to set properties- refers to the new object it will create properties- refers to the new object it will create
function Bird(){
    this.name="Albert"
    this.color="blue"
    this.numLegs=2

}
let bluebird=new Bird()

console.log(bluebird)
console.log(bluebird.name)
bluebird.name="Everine" //modifying the name of the object
console.log(bluebird.name)
console.log(bluebird)
function Dog(){
    this.name="blackky"
    this.color="brown"
    this.numLegs=4
}