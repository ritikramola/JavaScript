//  primitive datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//dynamic language
//here we don't have to define which the value we r providing
//example:

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //they are not equal

// Reference (Non primitive)

//Array , objects, Functions

const heroes = ["batman","flash","ironman"]


let myObj = {
    name: "Ritik",
    age : 22
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber);



////////////////////////////////////////////////////////////////////////////////////

//Stack(primitive) we get a copy, Heap(non primitive) we get a reference

let myYoutube = "RitikRamola"

let anothername = myYoutube
anothername = "chaiaurcode"

console.log(myYoutube);
console.log(anothername);

let userOne = {                    //heap
    email:"user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email =  "ritik@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)