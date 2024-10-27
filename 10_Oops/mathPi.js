//use to give info about any object's prop

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")


//all these false value means we cannot override,cannot repeat and cannot even change

console.log(descriptor);  //output   value: 3.141592653589793, writable: false, enumerable: false, configurable: false

//we can also define these prop for our OBJECT

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){  //to avoid this function we use certain condition(below)
        console.log("chai nhi bnni"); 
        
    }
}

const rit = console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(rit);  //value: 'ginger chai',writable: true,enumerable: true,configurable: true
  
Object.defineProperty(chai, 'name' ,{
    //writable: false,
    enumerable: false  //we won't be able to iterate name
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));  //value: 'ginger chai', writable: false, enumerable: false, configurable: true

for(let [key,value] of Object.entries(chai)){

    if(typeof value !== "function"){  //the condition
    console.log(`${key} : ${value}`); //price : 250, isAvailable : true
    }    
}



















//console.log(Math.PI); //3.14
// Math.PI = 5     //trying to override
// console.log(Math.PI); //gives 3.14



