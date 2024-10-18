//to create a method on our own whic can be used 

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

//to inject any property into Object we use(niche wala)

Object.prototype.ritik = function(){    //created this property for all functions,array,and string
    console.log("ritik is present in all object");//all will have this property now
    
}

//to inject any properties into array we use(niche wala)
Array.prototype.Hello = function(){
    console.log("Hello is the new property");
    
}

//heroPower.ritik() //ritik is present in all objects
//myHeros.ritik(); //(O/P:ritik is present in all objects) means ARRAY also contain this property
//myHeros.Hello(); //(O/P:Hello is the new property)as only Array was injected
//heroPower.Hello(); //(error)as only array was injected with Hello()



//inheritance

const User = {
    name:"ritik",
    email: "ritik@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fulltime: true,
//TeachSupport can access properties of TASupport
    __proto__:TeachSupport
}

//outside
Teacher.__proto__ = User //teacher can access all prop of User

//modern method
Object.setPrototypeOf(TeachSupport,Teacher) //TeachSupport can access all properties of Teacher now


//Question
//let myName = "Ritik    "
//COnsole.log(myName.trueLength)
//to create a code inwhich we can remove spaces using truelength

//solution

let Username = "RitikRamola      "

String.prototype.truelength= function(){
    console.log(`${this}`);  //RitikRamola
    console.log(`True length is ${this.trim().length}`); //11
    
    
}

Username.truelength()