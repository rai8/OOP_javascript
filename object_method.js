let duck={
    name:'Aflac',
    numLegs:2,
    sayNumLegs:function(){
        return 'The duck has '+duck.numLegs +' legs'
    },
    sayName(){
        return "The duck's name is  "+ duck.name}
    
}
console.log(duck.sayNumLegs())
console.log(duck.sayName())