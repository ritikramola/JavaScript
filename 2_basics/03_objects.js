//singleton - it is formed ith constructors not with literals
//Object.create used in constructor and forms singleton
//example :const User = new Object()


//object literals     //const tinderUser = {}

const mySym = Symbol("key1")

const JsUsers = {   //object contains keys and values
    name : "Ritik",
    [mySym]:"mykey1",       //symbol key
    age: 20,
    location: "Doon",
    email: "ritik@google.com",
    isLoggedIn : true,
    lastLogIn : ["Monday","Tuesday"]
}

//console.log(JsUsers.email)  //method 1 to access anything inside an objecct
//console.log(JsUsers["email"]);//meyhod 2 to access anything inside object 
//console.log(JsUsers[mySym]) //this is how we calll symbol from object

JsUsers.email = "ritik@gmail.com"  //overwrite previuos value
//Object.freeze (JsUsers)
JsUsers.email = "ritik@outlook.com" // we won,t be able to overrite any value after freezing the object
//console.log(JsUsers)


JsUsers.greeting = function(){
    console.log("Hello JS User");
}

//console.log(JsUsers.greeting); //gives [function(anonymous)]
//console.log(JsUsers.greeting()); //gives Hello JS User

JsUsers.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name} with email id ${this.email} and age is ${this.age}`);
}

console.log(JsUsers.greetingTwo());
