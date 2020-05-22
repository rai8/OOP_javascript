//instanceof is used to compare an object to a constructor
//giving true or false as the output
//true will mean that the oject is an instance of a constructor
//false will mean that the object is not an instance of a constructor

let Bird= function(name, color){
    this.name=name
    this.color=color
    this.numLegs=2
}
let crow=new Bird("Sajey","purple")
console.log(crow instanceof Bird)//output will be true

let canary={
    name:"Mildred",
    color:'hibiscus',
    numLegs:4
}
console.log(canary instanceof Bird)//outut will be false