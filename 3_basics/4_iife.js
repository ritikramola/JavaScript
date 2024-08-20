//Immediately Invoked Function Expressions (IIFE)
//iife is used to immediately run any function
//used to fix the problem of global scope


// function chai(){
//     console.log(`DB CONNECTED`); //this is how we run a function
// }
// chai()

(function chai(){  //this is named iife   


    console.log(`DB CONNECTED`);
})();  //this is how we run iife


//()();//1st () is definition,second() is execution ;semicolon is important to end the context


//how to pass argument
((name) => { //this is no name iife
console.log(`My Name is ${name}`);

})('Riitik');