//in the properties below, name and numLegs are defined as own properties
//this is because they are defined directly on the instant object

function Bird(name, numLegs){
    this.name=name
    this.numLegs=numLegs
}

//setting up the properties to an array


const bird1=new Bird("Slayley",2)
let ownProps=[] //setting it up to an empty array 

for (let property in bird1){
    if(bird1.hasOwnProperty(property)){
        ownProps.push(property)
    }
}
console.log(bird1)
console.log(bird1.name)
console.log(ownProps)