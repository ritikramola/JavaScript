const user = {
    username : "ritik",
    price : 999,

    welcomeMessage: function() {        //how to define function inside object
        console.log(`${this.username} , welcome to website`); // this represents the current context
        console.log(this) //it will give object details

    }

}

 //user.welcomeMessage() //here context ends output is ritik , welcome to website
// user.username = "sam"
// user.welcomeMessage() // here output will be sam , welcome to website

//console.log(this) //this will give empty {}
//global object is window object in browser



// function one(){
//     console.log(this); //it contains various methodds  
// }

// one()

// function one(){
//     let username = "Ritik"
//     console.log(this); //output will be (undefined) coz it's a function
// }

// one()


//arrow function

// const chai = () => {   //arrow function
//     let username = "Ritik"
//     console.log(this.username); //this will give undefined
    
// }

// chai()

const chai = () => { //arrow function
    let username = "Ritik"
    //console.log(this); //this will give {} as output
    
}

chai()


// const addTwo = (num1,num2) =>//basic arrow function
// {                           //this is how arrow function works
//     return num1+num2
// }

// console.log(addTwo(4,5))

// const addTwo = (num1,num2) => ( num1+num2 ) //impilicit return 

//const addTwo = (num1,num2) => {username : "Ritik"} //we can't return object like this
const addTwo = (num1,num2) => ({username : "Ritik"}) //this is the right method


console.log(addTwo(4,5))